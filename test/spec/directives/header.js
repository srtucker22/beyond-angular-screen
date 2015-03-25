describe('Directives: modHeader', function() {
  'use strict';

  var scope,
  element,
  compiled,
  html;

  beforeEach(module('demoApp'));
  beforeEach(module('views/modules/header.html'));
  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();
    html = '<mod-header></mod-header>';
    compiled = $compile(html);
    element = compiled(scope);
    scope.$digest();
  }));
  it('should render element', function(){
    expect(element.find('li').length).toBe(2);
  });
});