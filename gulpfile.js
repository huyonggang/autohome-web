var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var minifyHTML = require('gulp-minify-html');
var rename = require("gulp-rename");
var merge = require('merge-stream');
var phpjs = require('phpjs');
var clean = require('gulp-clean');
var templateCache = require('gulp-angular-templatecache');
var mkdirp = require('mkdirp');
var empty = require("gulp-empty");
var shell = require('gulp-shell');
var rev = require("gulp-rev");
var revReplace = require("gulp-rev-replace");
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

var isProd = false;

/**
 * begin build app js dir
 */

var apps = ['admin-home','login'];
var coreComponents = ['top-bar' , 'form-error-tip', 'loading', 'menu', 'navigation', 'toast', 'page','image-show','search-bar','setting-bar','aside','aside-user','drop-down'];

gulp.task('clean-build', function () {
    var tasks = [];

    tasks.push(
        gulp.src(['build'], {read: false})
            .pipe(clean({force: true}))
    );

    return merge.apply(null, tasks);
});

gulp.task('clean-dist', function () {
    var tasks = [];

    tasks.push(
        gulp.src(['dist'], {read: false})
            .pipe(clean({force: true}))
    );

    return merge.apply(null, tasks);
});

gulp.task('set-prod-true', function () {
    isProd = true;
});

gulp.task('concat-dep-js', ['clean-build'], function () {
    var bundle = gulp.src([
            './node_modules/angular/angular.js',
            './node_modules/angular-route/angular-route.js',
            './node_modules/angular-animate/angular-animate.js',
            './node_modules/angular-touch/angular-touch.js',
            './node_modules/angular-local-storage/dist/angular-local-storage.js',
            './node_modules/ng-file-upload/dist/ng-file-upload-all.js',
            './node_modules/angular-sortable-view/src/angular-sortable-view.js',
            './node_modules/angular-ui-router/release/angular-ui-router.js',
            './node_modules/oclazyload/dist/ocLazyLoad.js',
            './node_modules/ng-dialog/js/ngDialog.js',
            './node_modules/angular-ui-notification/dist/angular-ui-notification.js',
            './node_modules/ng-sortable/dist/ng-sortable.js',
            './node_modules/angularjs-datepicker/dist/angular-datepicker.min.js',
            './node_modules/echarts/dist/echarts.min.js',
            './lib/bootstrap/ui-bootstrap-tpls-1.1.2.min.js',
            './node_modules/sweetalert/dist/sweetalert.min.js'
            
        ])
        .pipe(concat('bundle.js', {newLine: '\r\n'}))
        .pipe(gulp.dest('build/asset/dep/'));

    var bundleMinified = gulp.src([
            './node_modules/angular/angular.min.js',
            './node_modules/angular-route/angular-route.min.js',
            './node_modules/angular-animate/angular-animate.min.js',
            './node_modules/angular-touch/angular-touch.min.js',
            './node_modules/angular-local-storage/dist/angular-local-storage.min.js',
            './node_modules/ng-file-upload/dist/ng-file-upload-all.min.js',
            './node_modules/angular-sortable-view/src/angular-sortable-view.min.js',
            './node_modules/angular-ui-router/release/angular-ui-router.min.js',
            './node_modules/oclazyload/dist/ocLazyLoad.min.js',
            './node_modules/ng-dialog/js/ngDialog.min.js',
            './node_modules/angular-ui-notification/dist/angular-ui-notification.min.js',
            './node_modules/ng-sortable/dist/ng-sortable.min.js',
            './node_modules/angularjs-datepicker/dist/angular-datepicker.min.js',
            './node_modules/echarts/dist/echarts.js',
            './lib/bootstrap/ui-bootstrap-tpls-1.1.2.min.js'
        ])
        .pipe(concat('bundle.min.js', {newLine: '\r\n'}))
        .pipe(gulp.dest('build/asset/dep/'));

    return merge(bundle, bundleMinified);
});

gulp.task('concat-dep-css', ['clean-build'], function () {
    var bundle = gulp.src([
            './node_modules/angular-ui-notification/dist/angular-ui-notification.css',
            './node_modules/angularjs-datepicker/dist/angular-datepicker.min.css',
            './node_modules/sweetalert/dist/sweetalert.css'
        ])
        .pipe(concat('bundle.css', {newLine: '\r\n'}))
        .pipe(gulp.dest('build/asset/dep/'));

    var bundleMinified = gulp.src([
            './node_modules/angular-ui-notification/dist/angular-ui-notification.min.css',
            './node_modules/angularjs-datepicker/dist/angular-datepicker.min.css'
        ])
        .pipe(concat('bundle.min.css', {newLine: '\r\n'}))
        .pipe(gulp.dest('build/asset/dep/'));

    return merge(bundle, bundleMinified);
});

gulp.task('concat-third-lib-css', ['clean-build'], function () {
    var thirdLibCss = gulp.src([
            'lib/bootstrap/bootstrap.css'
        ])
        .pipe(concat('third-lib.css', {newLine: '\r\n'}))
        .pipe(gulp.dest('build/asset/lib/'));

    var thirdLibCssMinified = gulp.src([
            'lib/bootstrap/bootstrap.css'
        ])
        .pipe(concat('third-lib.min.css', {newLine: '\r\n'}))
        .pipe(gulp.dest('build/asset/lib/'));

    return merge(thirdLibCss, thirdLibCssMinified);
});

gulp.task('build-angular-template-core', ['clean-build'], function () {
    var tasks = [];
    var taskCore = gulp.src(['core/template/*.html', 'core/template/**/*.html', 'core/component/**/template/*.html'])
        .pipe(templateCache({
            root: 'core',
            transformUrl: function (url) {
                return url.replace(/\/template\//g, '/')
            }
        }))
        .pipe(rename('template.js'))
        .pipe(gulp.dest('build/asset/core'));
    tasks.push(taskCore);

    for (var j in coreComponents) {
        var component = coreComponents[j];
        var taskComponent = gulp.src(['core/component/' + component + '/template/*.html'])
            .pipe(templateCache({root: 'core/navigation'}))
            .pipe(rename('template.js'))
            .pipe(gulp.dest('build/asset/core/component/' + component));
        tasks.push(taskComponent);
    }

    return merge.apply(null, tasks);
});

gulp.task('build-core-js', ['clean-build', 'concat-angular-template'], function () {
    var tasks = [];

    for (var i in apps) {
        var dir = apps[i];
        var task = gulp.src(['core/js/*.js', 'core/component/**/js/*.js', 'build/asset/core/template.js'])
            .pipe(concat('core'))
            .pipe(rename({extname: '.js'}))
            .pipe(gulp.dest('build/asset/core'));
        tasks.push(task);

        var taskProd = gulp.src(['core/js/*.js', 'core/component/**/js/*.js', 'build/asset/core/template.js'])
            .pipe(uglify())
            .pipe(concat('core'))
            .pipe(rename({extname: '.min.js'}))
            .pipe(gulp.dest('build/asset/core'));
        tasks.push(taskProd);
    }

    for (var j in coreComponents) {
        var component = coreComponents[j];
        var taskComponent = gulp.src(['build/asset/core/component/' + component + '/template.js', 'core/component/' + component + '/js/*.js'])
            .pipe(concat('app'))
            .pipe(rename({extname: '.js'}))
            .pipe(gulp.dest('build/asset/core/component/' + component));
        tasks.push(taskComponent);

        var taskComponentProd = gulp.src(['build/asset/core/component/' + component + '/template.js', 'core/component/' + component + '/js/*.js'])
            .pipe(uglify())
            .pipe(concat('app'))
            .pipe(rename({extname: '.min.js'}))
            .pipe(gulp.dest('build/asset/core/component/' + component));
        tasks.push(taskComponentProd);
    }

    return merge.apply(null, tasks);
});

// 编译sass
gulp.task('build-core-sass', ['clean-build'], function () {
    var tasks = [];

    for (var i in apps) {
        var app = apps[i];
        var task = gulp.src(['core/sass/*.scss', 'core/component/**/sass/*.scss'])
            .pipe(sass().on('error', sass.logError))
            .pipe(concat('style'))
            .pipe(rename({extname: '.css'}))
            .pipe(gulp.dest('build/asset/core'));
        tasks.push(task);

        var taskProd = gulp.src(['core/sass/*.scss', 'core/component/**/sass/*.scss'])
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(concat('style'))
            .pipe(rename({extname: '.min.css'}))
            .pipe(gulp.dest('build/asset/core'));
        tasks.push(taskProd);
    }

    for (var j in coreComponents) {
        var component = coreComponents[j];
        var taskComponent = gulp.src(['core/component/' + component + '/sass/*.scss'])
            .pipe(sass().on('error', sass.logError))
            .pipe(concat('style'))
            .pipe(rename({extname: '.css'}))
            .pipe(gulp.dest('build/asset/core/component/' + component));
        tasks.push(taskComponent);

        var taskComponentProd = gulp.src(['core/component/' + component + '/sass/*.scss'])
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(concat('style'))
            .pipe(rename({extname: '.min.css'}))
            .pipe(gulp.dest('build/asset/core/component/' + component));
        tasks.push(taskComponentProd);
    }

    return merge.apply(null, tasks);
});


gulp.task('build-angular-template', ['clean-build'], function () {
    var tasks = [];

    for (var i in apps) {
        var dir = apps[i];
        var task = gulp.src('app/' + dir + '/template/*.html')
            .pipe(templateCache({root: dir}))
            .pipe(rename('template.js'))
            .pipe(gulp.dest('build/' + dir + '/js'));
        tasks.push(task);

        var taskSingle = gulp.src('app/' + dir + '/template/*.html')
            .pipe(gulp.dest('build/' + dir));
        tasks.push(taskSingle);
    }

    return merge.apply(null, tasks);
});

gulp.task('concat-angular-template', ['build-angular-template-core', 'build-angular-template'], function () {
    var tasks = [];

    for (var i in apps) {
        var dir = apps[i];
        var task = gulp.src(['build/asset/core/template*.js', 'build/' + dir + '/js/template.js'])
            .pipe(concat('template.js'))
            .pipe(gulp.dest('build/' + dir + '/js'));
        tasks.push(task);
    }

    return merge.apply(null, tasks);
});


gulp.task('build-js', ['clean-build'], function () {
    var tasks = [];

    for (var i in apps) {
        var dir = apps[i];
        var task = gulp.src(['app/' + dir + '/js/*.js'])
            .pipe(concat('app'))
            .pipe(rename({extname: '.js'}))
            .pipe(gulp.dest('build/' + dir + '/js'));
        tasks.push(task);

        var taskProd = gulp.src(['app/' + dir + '/js/*.js'])
            .pipe(uglify())
            .pipe(concat('app'))
            .pipe(rename({extname: '.min.js'}))
            .pipe(gulp.dest('build/' + dir + '/js'));
        tasks.push(taskProd);
    }

    return merge.apply(null, tasks);
});

gulp.task('build-js-bundle', ['build-js', 'concat-angular-template'], function () {
    var tasks = [];

    for (var i in apps) {
        var app = apps[i];
        var task = gulp.src(['build/' + app + '/js/template.js', 'build/' + app + '/js/app.js'])
            .pipe(concat('bundle'))
            .pipe(rename({extname: '.js'}))
            .pipe(gulp.dest('build/' + app + '/js'));
        tasks.push(task);

        var taskProd = gulp.src(['build/' + app + '/js/template.js', 'build/' + app + '/js/app.min.js'])
            .pipe(concat('bundle'))
            .pipe(rename({extname: '.min.js'}))
            .pipe(gulp.dest('build/' + app + '/js'));
        tasks.push(taskProd);
    }

    return merge.apply(null, tasks);
});


gulp.task('build-sass', ['clean-build'], function () {
    var tasks = [];

    for (var i in apps) {
        var app = apps[i];
        var task = gulp.src(['app/' + app + '/sass/*.scss'])
            .pipe(sass().on('error', sass.logError))
            .pipe(concat('style'))
            .pipe(rename({extname: '.css'}))
            .pipe(gulp.dest('build/' + app + '/css'));
        tasks.push(task);

        var taskProd = gulp.src(['app/' + app + '/sass/*.scss'])
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(concat('style'))
            .pipe(rename({extname: '.min.css'}))
            .pipe(gulp.dest('build/' + app + '/css'));
        tasks.push(taskProd);
    }

    return merge.apply(null, tasks);
});

gulp.task('copy-img', ['clean-build'], function () {
    var tasks = [];

    for (var i in apps) {
        var app = apps[i];
        var task = gulp.src('app/' + app + '/img/**')
            .pipe(gulp.dest('build/' + app + '/img/'));
        tasks.push(task);
    }

    var j;
    for (j in coreComponents) {
        var component = coreComponents[j];
        var taskComponent = gulp.src('core/component/' + component + '/img/**')
            .pipe(gulp.dest('build/asset/core/component/' + component + '/img/'));
        tasks.push(taskComponent);
    }

    return merge.apply(null, tasks);
});

//concat third js
gulp.task('concat-third-lib-js', ['clean-build'], function(){
    var thirdLibJs = gulp.src([
            'node_modules/jquery/dist/jquery.min.js', 
            'lib/jquery-ui/jquery-ui.min.js',
            'lib/ui-gird/ui-grid.js'
        ])
        .pipe(concat('third-lib.js', {newLine: '\r\n'}))
        .pipe(gulp.dest('build/asset/lib/'));

    var thirdLibJsMinified = gulp.src([
            'node_modules/jquery/dist/jquery.min.js', 
            'lib/jquery-ui/jquery-ui.min.js',
            'lib/ui-gird/ui-grid.js'
        ])
        .pipe(concat('third-lib.min.js', {newLine: '\r\n'}))
        .pipe(gulp.dest('build/asset/lib/'));

    return merge(thirdLibJs, thirdLibJsMinified);
});

/**
 * build final page
 */

gulp.task('build-html', ['clean-build', 'build-sass', 'build-js-bundle', 'copy-img'], function () {

    var pages = [
        {name: 'hello', file: 'login.html', title: ''},
        {name: 'admin-home', file: 'admin-home.html', title: ''},
        {name: 'home', file: 'home.html', title: ''},
        {name: 'edit', file: 'edit-process.html', title: ''},
        {name: 'finance', file: 'finance.html', title: ''},
        {name: 'administration', file: 'administration.html', title: ''},
        {name: 'work', file: 'work.html', title: ''},
        {name: 'user-setting', file: 'setting.html', title: ''},
        {name: 'company-setting', file: 'company-setting.html', title: ''},
        {name: 'organization', file: 'member-tree.html', title: ''},
        {name: 'process-setting', file: 'process-setting.html', title: ''},
        {name: 'message', file: 'message.html', title: ''},
        //entrance
        {name: 'entrance', file: 'welcome.html', title: ''},
        {name: 'login', file: 'login.html', title: ''},
        {name: 'item', file: 'home.html', title: ''},
        {name: 'recharge', file: 'recharge-manage.html', title: ''}

    ];
    var tasks = [];

    for (var i in pages) {
        var page = pages[i];
        var name = page.name;
        var title = page.title;
        var file = page.file;

        var layout = page.layout ? page.layout : 'angular';
        var app = page.app ? page.app : 'app';
        var base = page.base ? page.base : file;
        var path = page.path ? page.path : '';

        var layoutMapping = {
            'angular': {
                libDepCss: ['asset/dep/bundle.css', 'asset/dep/bundle.min.css'],
                libDepJs: ['asset/dep/bundle.js', 'asset/dep/bundle.min.js'],
                libCss: ['asset/core/style.css', 'asset/core/style.min.css'],
                libJs: ['asset/core/core.js', 'asset/core/core.min.js'],
                appCss: [name + '/css/style.css', name + '/css/style.min.css'],
                appJs: [name + '/js/bundle.js', name + '/js/bundle.min.js'],
                thirdLibJs: ['asset/lib/third-lib.js', 'asset/lib/third-lib.min.js'],
                thirdLibCss: ['asset/lib/third-lib.css', 'asset/lib/third-lib.min.css'],
            },
        };

        var libDepCss = isProd ? layoutMapping[layout].libDepCss[1] : layoutMapping[layout].libDepCss[0];
        var libDepJs = isProd ? layoutMapping[layout].libDepJs[1] : layoutMapping[layout].libDepJs[0];
        var libCss = isProd ? layoutMapping[layout].libCss[1] : layoutMapping[layout].libCss[0];
        var libJs = isProd ? layoutMapping[layout].libJs[1] : layoutMapping[layout].libJs[0];
        var appCss = isProd ? layoutMapping[layout].appCss[1] : layoutMapping[layout].appCss[0];
        var appJs = isProd ? layoutMapping[layout].appJs[1] : layoutMapping[layout].appJs[0];
        var thirdLibJs = isProd ? layoutMapping[layout].thirdLibJs[1] : layoutMapping[layout].thirdLibJs[0];
        var thirdLibCss = isProd ? layoutMapping[layout].thirdLibCss[1] : layoutMapping[layout].thirdLibCss[0];

        var taskProd = gulp.src(['core/layout/' + layout + '.html'])
            .pipe(replace('@ng-app-name', app))
            .pipe(replace('@title', title))
            .pipe(replace('@base-url', base))
            .pipe(replace('@lib-css', libCss))
            .pipe(replace('@app-css', appCss))
            .pipe(replace('@lib-dep-css', libDepCss))
            .pipe(replace('@third-lib-css', thirdLibCss))
            .pipe(replace('@third-lib-js', thirdLibJs)) //third lib js
            .pipe(replace('@lib-dep-js', libDepJs))
            .pipe(replace('@lib-js', libJs))
            .pipe(replace('@app-js', appJs))
            .pipe(isProd ? minifyHTML() : empty())
            .pipe(rename(file))
            .pipe(gulp.dest('build/' + path));
        tasks.push(taskProd);
    }

    return merge.apply(null, tasks);
});

gulp.task('build-holder', ['clean-build', 'build-sass', 'build-js-bundle', 'copy-img'], function () {
    var tasks = [];

    var taskCss = gulp.src(['holder/sass/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style'))
        .pipe(rename({extname: '.css'}))
        .pipe(gulp.dest('build/holder'));
    tasks.push(taskCss);

    var taskCssProd = gulp.src(['holder/sass/*.scss'])
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(concat('style'))
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest('build/holder'));
    tasks.push(taskCssProd);

    var taskCore = gulp.src(['holder/template/*.html'])
        .pipe(templateCache({root: 'holder/template'}))
        .pipe(rename('template.js'))
        .pipe(gulp.dest('build/holder'));
    tasks.push(taskCore);

    var taskJs = gulp.src(['holder/js/*.js'])
        .pipe(concat('app'))
        .pipe(rename({extname: '.js'}))
        .pipe(gulp.dest('build/holder'));
    tasks.push(taskJs);

    var taskJsProd = gulp.src(['holder/js/*.js'])
        .pipe(uglify())
        .pipe(concat('app'))
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('build/holder'));
    tasks.push(taskJsProd);

    return merge.apply(null, tasks);
});


gulp.task('build-holder-html', ['build-holder'], function () {
    var tasks = [];

    var taskConcatJsAndTemplate = gulp.src(['build/holder/template.js', 'build/holder/app.js'])
        .pipe(concat('bundle'))
        .pipe(rename({extname: '.js'}))
        .pipe(gulp.dest('build/holder'));
    tasks.push(taskConcatJsAndTemplate);

    var taskProdConcatJsAndTemplate = gulp.src(['build/holder/template.js', 'build/holder/app.min.js'])
        .pipe(concat('bundle'))
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('build/holder'));
    tasks.push(taskProdConcatJsAndTemplate);

    var libDepCss = isProd ? 'asset/dep/bundle.min.css' : 'asset/dep/bundle.css';
    var libDepJs = isProd ? 'asset/dep/bundle.min.js' : 'asset/dep/bundle.js';
    var libCss = isProd ? 'asset/core/style.min.css' : 'asset/core/style.css';
    var libJs = isProd ? 'asset/core/core.min.js' : 'asset/core/core.js';
    var appCss = isProd ? 'holder/style.min.css' : 'holder/style.css';
    var appJs = isProd ? 'holder/bundle.min.js' : 'holder/bundle.js';
    var thirdLibJs = isProd ? 'asset/lib/third-lib.min.js' : 'asset/lib/third-lib.js';
    var thirdLibCss = isProd ? 'asset/lib/third-lib.min.css' : 'asset/lib/third-lib.css';

    var taskProd = gulp.src(['core/layout/angular.html'])
        .pipe(replace('@ng-app-name', 'app'))
        .pipe(replace('@title', '惠众后台'))
        .pipe(replace('@base-url', ''))

        .pipe(replace('@lib-dep-css', libDepCss))
        .pipe(replace('@lib-css', libCss))
        .pipe(replace('@app-css', appCss))

        .pipe(replace('@third-lib-js', thirdLibJs)) //thid lib js
        .pipe(replace('@third-lib-css', thirdLibCss))
        .pipe(replace('@lib-dep-js', libDepJs))
        .pipe(replace('@lib-js', libJs))
        .pipe(replace('@app-js', appJs))


        .pipe(isProd ? minifyHTML() : empty())
        .pipe(rename('index.html'))
        .pipe(gulp.dest('build/'));
    tasks.push(taskProd);


    return merge.apply(null, tasks);
});

gulp.task('rev', ['default', 'clean-dist'], function () {
    return gulp.src(['build/**/*.css', 'build/**/*.js', 'build/**/*.html'])
        //.pipe(rev())
        .pipe(gulp.dest('dist/'))
        //.pipe(rev.manifest())
        //.pipe(gulp.dest('build/'))
    ;
});

gulp.task('rev-replace', ["rev", 'clean-dist'], function () {
    var manifest = gulp.src('build/rev-manifest.json');

    return gulp.src(['build/*.html'])
        //.pipe(revReplace({manifest: manifest}))
        .pipe(gulp.dest('dist/'));
});

gulp.task('rev-replace-config', ["rev-replace", 'clean-dist'], function () {
    var manifest = gulp.src('build/rev-manifest.json');

    // return gulp.src(['dist/holder/*.js'])
    //     .pipe(revReplace({manifest: manifest}))
    //     .pipe(gulp.dest('dist/holder'));
});


gulp.task('imagemin', ['rev-replace', 'rev-replace'], function () {
    var tasks = [];

    for (var i in apps) {
        var dir = apps[i];
        var task = gulp.src('app/' + dir + '/img/**')
            .pipe(gulp.dest('build/' + dir + '/img/'));
        tasks.push(task);

        if (isProd || !isProd) {
            var compressTask = gulp.src('app/' + dir + '/img/**')
                .pipe(imagemin({
                    progressive: true,
                    svgoPlugins: [{removeViewBox: false}],
                    use: [pngquant()]
                }))
                .pipe(gulp.dest('dist/' + dir + '/img/'));
            tasks.push(compressTask);
        }
    }

    var j;
    for (j in coreComponents) {
        var component = coreComponents[j];
        var taskComponent = gulp.src('core/component/' + component + '/img/**')
            .pipe(gulp.dest('build/asset/core/component/' + component + '/img/'));
        tasks.push(taskComponent);

        if (isProd) {
            var compressComponentTask = gulp.src('core/component/' + component + '/img/**')
                .pipe(imagemin({
                    progressive: true,
                    svgoPlugins: [{removeViewBox: false}],
                    use: [pngquant()]
                }))
                .pipe(gulp.dest('dist/asset/core/component/' + component + '/img/'));
            tasks.push(compressComponentTask);
        }
    }

    return merge.apply(null, tasks);
});

gulp.task('default', [
    'clean-build',
    'concat-dep-js',
    'concat-dep-css',
    'build-core-js',
    'build-core-sass',
    'build-angular-template-core',
    'build-angular-template',
    'concat-angular-template',
    'build-js',
    'build-js-bundle',
    'build-sass',
    'concat-third-lib-css',
    'concat-third-lib-js',
    'copy-img',
    'build-holder',
    'build-holder-html'
]);

gulp.task('build', ['default']);

gulp.task('release', [
    'set-prod-true',
    'clean-build',
    'concat-dep-js',
    'concat-dep-css',
    'build-core-js',
    'build-core-sass',
    'build-angular-template-core',
    'build-angular-template',
    'concat-angular-template',
    'build-js',
    'build-js-bundle',
    'build-sass',
    'concat-third-lib-js',
    'concat-third-lib-css',
    'copy-img',
    'build-holder',
    'build-holder-html',
    'rev',
    'rev-replace',
    'rev-replace-config'
]);

gulp.task('watch', function () {
    var jsWatcher = gulp.watch(['app/**/js/*.js', 'app/**/template/**/*.js', 'core/js/*.js', 'core/component/**/js/*.js'], ['default']);
    jsWatcher.on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

    var htmlWatcher = gulp.watch(['app/**/template/**/*.html', 'app/**/*.html', 'core/**/*.html', 'holder/template/*.html'], ['default']);
    htmlWatcher.on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

    var cssWatcher = gulp.watch(['app/**/*.scss', 'app/**/template/**/*.scss', 'core/sass/*.scss', 'core/component/**/sass/*.scss'], ['default']);
    cssWatcher.on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('sync', function () {
    browserSync.init({
        server: "./build",
        open: false
    });
});

gulp.task('sync-dist', function () {
    browserSync.init({
        server: "./dist",
        open: false
    });
});