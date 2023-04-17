const glob = require('glob'),
    fm = require('front-matter'),
    fs = require('fs');

function rename(n) {
  if (n.indexOf("README") != -1) {
    return '';
  }

  return n.substring(n.indexOf('/')).substring(0, n.lastIndexOf('.'));
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}

function sort(path) {
  const files = glob.sync(`${path}/**/*.md`)
  let orders = [];
  const configuration = readConfigurationWithPath(path)?.pages

  for (let file of files) {
    const name = file.split('/').pop().split('.').shift()
    const order = configuration && configuration[name]?.order
    if (order) {
      orders.push({order: order, name: file});
    } else {
      orders.push({order: 0, name: file});
      console.warn(
          `Warning: File ${file} does not have an order.  Defaulting to 0`);
    }
  }
  let a = orders.sort((lhs, rhs) => {
    return lhs.order - rhs.order
  }).map(t => `${rename(t.name)}`).filter(t => t !== '');
  return a;

}

const omit = [
  'assets',
  'README.md',
  '.vuepress'
];

function readConfiguration(root, directory) {
  const config = `${root}/${directory}`;
  return readConfigurationWithPath(config)
}

function readConfigurationWithPath(path) {
  const config = `${path}/config.json`;
  if (fs.existsSync(config)) {
    const buffer = fs.readFileSync(config, 'utf-8');
    return JSON.parse(buffer);
  }
  return {
    order: 1000
  }
}

function sortDirectories(root, directories) {
  const ordered = directories.map(directory => {
        return {
          directory: directory,
          configuration: readConfiguration(root, directory)
        };
      }),
      sorted = ordered.sort(
          (lhs, rhs) => lhs.configuration.order - rhs.configuration.order);
  return sorted.map(s => s.directory);

}

function tree(root) {
  let subdirs = sortDirectories(root, fs.readdirSync(root)),
      subgroups = subdirs.filter(f => omit.indexOf(f) === -1).map(subdir => {
        let children = sort(`${root}/${subdir}`);
        return {
          title: capitalize(subdir).replace('-', ' '),
          collapsable: !!children.length,
          children: children
        }
      });
  return subgroups;
}

module.exports = {
  title: 'Aire',
  home: true,
  description: 'A Java Front-End for the 21st Century',
  themeConfig: {
    '/': {
      sidebar: 'auto'
    },
    logo: '/cubes-stacked-duotone.svg',
    sidebar: tree('src'),
    repo: 'aire-ux/aire-ux',
    repoLabel: 'Get Aire',
  },
  dest: 'docs'
};
