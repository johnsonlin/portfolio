import { JohnsonlinPage } from './app.po';

describe('johnsonlin App', function() {
  let page: JohnsonlinPage;

  beforeEach(() => {
    page = new JohnsonlinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
