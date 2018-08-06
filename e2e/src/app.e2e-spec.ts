import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('Render page test', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    browser.executeScript('window.localStorage.clear()');
  });

  afterEach(() => {
    browser.executeScript('window.localStorage.clear()');
  });

  it('should display div container', () => {
    expect(page.getParagraphText()).toEqual('container');
  });
});


describe('Add to datatable test', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    browser.executeScript('window.localStorage.clear()');
  });

  afterEach(() => {
    browser.executeScript('window.localStorage.clear()');
  });


  it('Display modal window on add button click', () => {
    page.getAddButton().click();
    expect(page.getModalWindow()).toEqual('addNewModal');
  });

  it('add new item to data table', () => {
    page.addNewItemToTable(page.sampleInputData());

    const list = element.all(by.className('tr-item-list'));
    expect(list.count()).toEqual(1);
    expect(list.get(0).all(by.tagName('td')).first().getText()).toEqual('Bob');
    expect(list.get(0).all(by.tagName('td')).get(1).getText()).toEqual('Hyderabad');
    expect(list.get(0).all(by.tagName('td')).get(2).getText()).toEqual('25');
    expect(list.get(0).all(by.tagName('td')).get(3).getText()).toEqual('active');

  });

});
