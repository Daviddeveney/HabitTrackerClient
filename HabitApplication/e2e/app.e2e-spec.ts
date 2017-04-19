import { HabitApplicationPage } from './app.po';

describe('habit-application App', () => {
  let page: HabitApplicationPage;

  beforeEach(() => {
    page = new HabitApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
