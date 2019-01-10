const program = require('commander');
const {prompt} = require('inquirer');
const fs = require('fs');
const CURR_DIR = process.cwd();
// Require logic.js file and extract controller functions using JS destructuring assignment


const questions = [
    {
      type : 'input',
      name : 'screen_name',
      message : 'Enter Screens Name ...'
    },
    {
      type : 'input',
      name : 'screen_path',
      message : 'Enter Screens Path ...',
      default: '../src/screens/'
    },
    {
        type : 'list',
        name : 'screen_type',
        message : 'Enter Screens Type ...',
        choices: ['default', 'stack', 'tab navigators'],
        default: 0
    },
  ];

const question_screen_types = [
    {
        type: ''
    }
]

function capitalizeString(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function createDirectoryContents (writePath, template, moduleName) {
    const filesToCreate = fs.readdirSync(template.path);
    moduleName = moduleName.toLowerCase()
    const targetDir = `${writePath}/${moduleName}/`;
    fs.mkdirSync(targetDir)
    filesToCreate.forEach(file => {
      const origFilePath = `${template.path}/${file}`;
      // get stats about the current file
      const stats = fs.statSync(origFilePath);
      if (stats.isFile()) {
        let contents = fs.readFileSync(origFilePath,  'utf8');
        contents = contents.replace(new RegExp(template.name.toLowerCase(), "g"), moduleName.toLowerCase());
        contents = contents.replace(new RegExp(capitalizeString(template.name), "g"), capitalizeString(moduleName));
        writePath = `${targetDir}/${file}`
        fs.writeFileSync(writePath, contents, 'utf8');
      }
    });
    fs.rename(`${targetDir}/${template.name}.js`, `${targetDir}/${moduleName.toLowerCase()}.js`, function(err) {
        if ( err ) console.log('ERROR: ' + err);
    });
  }

function changeModule(path, moduleName){
    var module = fs.createWriteStream(path, {
        flags: 'a' // 'a' means appending (old data will be preserved)
    })

    module.write(`\r\nimport ${capitalizeString(moduleName)} from '@screens/${moduleName.toLowerCase()}';`)
    module.write(`\r\nexport const ${capitalizeString(moduleName)}Screen = ${capitalizeString(moduleName)}`)
    module.end()
}

function updateNavigators(path, moduleName){
    var module = fs.createWriteStream(path, {
        flags: 'a' // 'a' means appending (old data will be preserved)
    })

    fs.readFile(path, 'utf8', function(err, navigators) {
        // console.log(navigators)
        var index = navigators.toString().indexOf('module')
        
        // console.log(index)
        // const stack_templates = `
        // \r\nconst ${capitalizeString(moduleName)}Screen = createStackNavigator(
        //     {
        //     ${moduleName}: ${capitalizeString(moduleName)}Screen,
        //     },
        // );   
        // `
        // var buf = new Buffer(stack_templates);
        // var file = fs.openSync(path, 'r+');
        // fs.writeSync(file, buf, 0, buf.length, index-20);
    });

    module.write(`\r\nimport ${capitalizeString(moduleName)} from '@screens/${moduleName.toLowerCase()}';`)
    module.write(`\r\nexport const ${capitalizeString(moduleName)}Screen = ${capitalizeString(moduleName)}`)
    module.end()
    // fs.readFile(path, 'utf8', function(err, navigators) {
    //     console.log(navigators)
    //     var index = navigators.toString().indexOf('//Stacks')
    //     console.log(index)
    //     const stack_templates = `
    //     \r\nconst ${capitalizeString(moduleName)}Screen = createStackNavigator(
    //         {
    //         ${moduleName}: ${capitalizeString(moduleName)}Screen,
    //         },
    //     );   
    //     `
    //     var buf = new Buffer(stack_templates);
    //     var file = fs.openSync(path, 'r+');
    //     fs.writeSync(file, buf, 0, buf.length, index-20);
    // });
}

program
  .version('0.0.1')
  .description('Reku Native Generator');

program
  .alias('a')
  .description('Add a new screens')
  .action(() => {
    prompt(questions).then(answers => {
        console.log(answers)
        switch(answers.screen_type){
            case 'default':
                const templateStack = {
                    name: 'stack',
                    path:  './templates/screens/stack'
                }
                const modulePath = '../src/_navigators/module.js'
                createDirectoryContents(answers.screen_path, templateStack , answers.screen_name)
                changeModule(modulePath, answers.screen_name)
                break;
            case 'stack':  
                // updateNavigators('../src/_navigators/navigators.js', answers.screen_name)
                // break;
                // createDirectoryContents(answers.screen_path, templateStack , answers.screen_name)
                // changeModule(modulePath, answers.screen_name)
        }
    }
    )
  });

program
  .command('getContact <name>')
  .alias('r')
  .description('Get contact')

program.parse(process.argv);