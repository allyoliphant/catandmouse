import { CatandmousePage } from './app.po';

describe('catandmouse App', function() {
  let page: CatandmousePage;

  beforeEach(() => {
    page = new CatandmousePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
