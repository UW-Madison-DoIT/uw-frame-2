import { UwFrame2Page } from './app.po';

describe('uw-frame-2 App', function() {
  let page: UwFrame2Page;

  beforeEach(() => {
    page = new UwFrame2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
