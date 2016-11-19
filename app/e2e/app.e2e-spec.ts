import { SavingsAppPage } from './app.po';

describe('savings-app App', function() {
  let page: SavingsAppPage;

  beforeEach(() => {
    page = new SavingsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
