import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display div container', () => {
    // page.navigateTo();
    expect(page.getParagraphText()).toEqual('container');
  });

  it('click add button', () => {
    // page.navigateTo();
    page.getAddButton().click();
    expect(page.getModalWindow()).toEqual('addNewModal');
  });

  // it('add new item', () => {
  //   page.getAddButton().click();
  //   expect(page.getModalWindow()).toEqual('addNewModal');

  // });

});
