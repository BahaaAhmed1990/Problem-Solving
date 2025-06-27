function DocumentParser(reader) {
    this.reader = reader;
    this.reset();
}

DocumentParser.prototype.reset = function () {
    this.wordCount = 0;
    this.charCount = 0;
    this.lineCount = 0;
};

DocumentParser.prototype.parse = function () {
    let chars = 0
    let words = 0
    let lines = 0


    if (this.reader.length === 0) { return }
    this.reader.split('\n').forEach(line => {
        lines++
        chars += line.length
        line.split(' ').forEach((w) => {
            if (w === '') { return }
            words++
        })
    })

    this.wordCount = words
    this.charCount = chars
    this.lineCount = lines

};

// let parser = new DocumentParser('Hello world');
// let parser = new DocumentParser("Is it me, or you?");
let parser = new DocumentParser("You can try, but you'll never catch me.\nBazinga!");
parser.parse()
console.log(parser.lineCount)
console.log(parser.wordCount)
console.log(parser.charCount)