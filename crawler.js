/**
 * This file is a help for generating scripts for
 * 1. clone Aurelia packages (repositories)
 * 2. pull Aurelia packages (repositories)
 * 3. install dependent modules for each Aurelia package (repository)
 * 3. build-amd JS code for each Aurelia package (repository)
 * 5. generate a sample to configure Aurelia packages in RequireJS configuration
 *
 * Each task of above is corresponding with the below tasks when using aureliaCrawler.getScript
 * 1. clone
 * 2. pull
 * 3. npm-install
 * 4. build-amd
 * 5. requirejs-config
 *
 * Beside Aurelia packages for used by developers, there are other repositories for guides, documentations,
 * so at the beginning of the script, we could define the ones to be excluded.
 *
 * Moreover, there are some packages not follow the standard structure of a Aurelia package, we could define them
 * as exceptions.
 *
 * @author Vu Duc Tuyen (kanvuduc)
 * */

(function (exports) {
    var excludes = [
            'benchmarks', 'documentation', 'app-contacts',
            'skeleton-navigation', 'skeleton-plugin',
            'cli', 'tools', 'app-documentation'
        ],

        exceptions = {
            'html-template-element': {
                location: 'dist',
                main: 'HTMLTemplateElement',
                build: 'build-debug'
            }
        },

        defaultMain = 'index',
        defaultLocation = 'dist/amd',
        defaultBuild = 'build-amd';

    var result = [],
        completed = false;

    jQuery.getJSON(
        'https://api.github.com/users/aurelia/repos?per_page=100',
        function (response) {
            response.forEach(function (item, index) {

                var name = item.name;

                if (excludes.indexOf(name) > -1) {
                    return;
                }

                var
                    exception = exceptions[name],
                    packageName = ['aurelia', name].join('-'),
                    main = exception && exception.main || defaultMain,
                    location = exception && exception.location || defaultLocation,
                    build = exception && exception.build || defaultBuild;

                result.push({
                    name: name,
                    git: item.git_url,
                    cloneFolder: 'aurelia-packages',
                    package: {
                        name: packageName,
                        location: ['aurelia-amd', name].join('/'),
                        main: main
                    },
                    build: build,
                    location: location
                });
            });
            completed = true;
            console.log('success', completed);
        },
        function (error) {
            completed = true;
            console.log('failed', completed);
        }
    );

    exports.getScript = function getScript(task) {
        if (!completed || result.length == 0) {
            return console.log('#Please wait for processing Aurelia repositories!');
        }

        switch (task) {
            case 'clone':
                return getCloneScript();
            case 'pull':
                return getPullScript();
            case 'npm-install':
                return getNpmInstallScript();
            case 'build-amd':
                return getAmdBuildScript();
            case 'requirejs-config':
                return getRequireJsConfig();
            default:
                throw 'Not supported {' + task + '}';
        }
    }

    function getCloneScript() {
        return 'mkdir aurelia-packages\r\ncd ./aurelia-packages\r\n' + result.map(function (item) {
                return 'git clone ' + item.git;
            }).join('\r\n');
    };

    function getPullScript() {
        return result.map(function (item) {
            return 'cd ./aurelia-packages/' + item.name + '\r\ngit pull ' + item.git;
        }).join('\r\ncd ../../\r\n');
    };

    function getNpmInstallScript() {
        return result.map(function (item) {
            return 'cd ./aurelia-packages/' + item.name + '\r\nnpm install ';
        }).join('\r\ncd ../../\r\n');
    };

    function getAmdBuildScript() {
        return result.map(function (item) {
            return 'cd ./aurelia-packages/' + item.name + '\r\ngulp ' + item.build +
                '\r\nmkdir -p ../../aurelia-amd/' + item.name +
                '\r\ncp -r ./' + item.location + '/ ../../aurelia-amd/' + item.name;
        }).join('\r\ncd ../../\r\n');
    };

    function getRequireJsConfig() {
        return JSON.stringify(result.map(function (item) {
            return item.package;
        }), null, 4);
    };

}(window.aureliaCrawler || (window.aureliaCrawler = {})));