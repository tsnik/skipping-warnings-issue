const fs = require('fs');
const remark = require('remark');
const lintPlugin = require('remark-lint');

function createProccessor(settings) {
  const pluginOptions = {
    external: ['plugin.js'],
  };

  return remark().use(lintPlugin, pluginOptions);
}

const processor = createProccessor({ loose_endings: ['.']});

 processor.process(
     fs.readFileSync('file.md').toString(),
    (err, file) => {
		console.log('Result');
		console.log(file.messages);
	}
  );

