module.exports = () => {
    let common = './public/**/*',
        compile = './asset/compile/',
        develop = './asset/develop/',
        release = './asset/release/',
        output = '../test';
    return {
        common: common,
        compile: compile,
        develop: develop,
        release: release,
        output: output,


        js: [ // js目录
            './public/js/**'
        ],
        fonts: [
            './public/fonts/**'
        ],
        fontAwesome: [
            './public/font-awesome/**'
        ],
        css: ['./public/stylesheets/css/**'],
        img: [
            './public/img/**'
        ]
    };
};