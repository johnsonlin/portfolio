import { TaasFrontendPage } from './app.po';

describe('taas-frontend App', () => {
  let page: TaasFrontendPage;

  beforeEach(() => {
    page = new TaasFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
