const semver = require('semver');
const package = require('./package');
const version = package.engines.node;

if (!semver.satisfies(process.version, version)) {
    console.log('Required node version ' + version + ' not satisfied with current version ' + process.version + '.');
    console.log('Use \'nvm use\' to switch to required version.');
    process.exit(1);
} else {
    console.log('Node version is OK.');
}