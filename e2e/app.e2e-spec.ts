import { FirstNg2AppPage } from './app.po';

describe('first-ng2-app App', () => {
  let page: FirstNg2AppPage;

  beforeEach(() => {
    page = new FirstNg2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
