function testPlugin(ast, file, preferred, done)
{
	file.warn('Warning', {column:22, line:6});
	console.log('Plugin');
	console.log(file.messages);
	done();
}

module.exports = { testPlugin }
