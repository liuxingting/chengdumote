var gulp=require('gulp');
var minifyHtml=require('gulp-minify-html');
var minifyCss=require('gulp-clean-css'); //首先加载依赖
var minifyJs=require('gulp-uglify');
var concatJs=require('gulp-concat');

//合并 压缩js任务
gulp.task('jstask',function(){
	gulp.src('./js/*.js') 
	.pipe(concatJs('all.js')) //合并后的文件名
	.pipe(minifyJs()) 
	.pipe(gulp.dest('./dist/js')) 
})

//任务 压缩html
gulp.task('htmltask',function(){
	gulp.src('./*.html') //入口
	.pipe(minifyHtml())   //执行插件
	.pipe(gulp.dest('./dist')) //输出到哪
});

//任务 压缩css
gulp.task('csstask',function(){
	gulp.src('./css/*.css') //入口
	.pipe(minifyCss())   //执行插件
	.pipe(gulp.dest('./dist/css')) //输出到哪
});

gulp.task("watchtask",function(){
	gulp.watch('*.html',['htmltask']);
	gulp.watch('css/*.css',['csstask']);
})
