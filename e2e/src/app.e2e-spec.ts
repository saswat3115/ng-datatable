import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {
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

  it('click add button', () => {
    page.getAddButton().click();
    expect(page.getModalWindow()).toEqual('addNewModal');
  });

  it('add new item', () => {
    page.getAddButton().click();

    element(by.name('inputName')).sendKeys('Bob');
    element(by.name('address')).sendKeys('Hyderabad');
    element(by.name('age')).sendKeys('25');
    element(by.name('selectStatus')).sendKeys('active');

    element(by.css('input[type=submit]')).click();

    const list = element.all(by.className('tr-item-list'));
    expect(list.count()).toEqual(1);

  });

});
