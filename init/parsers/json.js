module.exports = {
  type: 'json',
  parse: function(source) {
    if (source.type !== this.type) throw new Error('Source type is not of type: ' + this.type);

    // TODO: implement JSON parsing logic (json-path maybe?)
  },
};