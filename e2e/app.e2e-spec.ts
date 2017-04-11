import { ProJJPage } from './app.po';

describe('pro-jj App', () => {
  let page: ProJJPage;

  beforeEach(() => {
    page = new ProJJPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
