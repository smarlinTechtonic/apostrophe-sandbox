module.exports = {
  stylesheets: [
    {
      name: 'site'
    }
  ],
  jQuery: 3,
  construct: function(self, options) {
    // modules
    self.scripts.push({ name: 'modules/demo-header', when: 'always' });
    self.scripts.push({ name: 'modules/off-canvas', when: 'always' });
    self.scripts.push({ name: 'modules/autologin', when: 'always' });
  }
};
