import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('Delete datatable test', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    browser.executeScript('window.localStorage.clear()');
  });

  afterEach(() => {
    browser.executeScript('window.localStorage.clear()');
  });

  it('remove item from datatable on delete button click', () => {
    page.addNewItemToTable(page.sampleInputData());

    let list = element.all(by.className('tr-item-list'));
    expect(list.count()).toEqual(1);

    page.getDeleteButton().click();
    list = element.all(by.className('tr-item-list'));
    expect(list.count()).toEqual(0);
  });
});

