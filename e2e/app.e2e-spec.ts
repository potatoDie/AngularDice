import { Dice2Page } from './app.po';

describe('dice2 App', () => {
  let page: Dice2Page;

  beforeEach(() => {
    page = new Dice2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
