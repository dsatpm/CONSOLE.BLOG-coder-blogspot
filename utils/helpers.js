const Handlebars = require('handlebars');

Handlebars.registerHelper('formatDate', function (date) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
});