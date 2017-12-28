import { NgchatbotappPage } from './app.po';

describe('ngchatbotapp App', () => {
  let page: NgchatbotappPage;

  beforeEach(() => {
    page = new NgchatbotappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
