import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('Edit datatable test', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    browser.executeScript('window.localStorage.clear()');
  });

  afterEach(() => {
    browser.executeScript('window.localStorage.clear()');
  });

  it('Show edit modal window on edit button click', () => {
    page.addNewItemToTable(page.sampleInputData());
    page.getEditButton().click();
    expect(page.getModalWindow()).toEqual('addNewModal');

    expect(element(by.name('inputName')).getAttribute('value')).toEqual(page.sampleInputData().name);
    expect(element(by.name('address')).getAttribute('value')).toEqual(page.sampleInputData().address);
    expect(element(by.name('age')).getAttribute('value')).toEqual(page.sampleInputData().age);
    expect(element(by.name('selectStatus')).getAttribute('value')).toEqual(page.sampleInputData().status);
  });

  it('Modify an existing item', () => {
    page.addNewItemToTable(page.sampleInputData());
    page.getEditButton().click();
    expect(page.getModalWindow()).toEqual('addNewModal');

    expect(element(by.name('inputName')).getAttribute('value')).toEqual(page.sampleInputData().name);
    expect(element(by.name('address')).getAttribute('value')).toEqual(page.sampleInputData().address);
    expect(element(by.name('age')).getAttribute('value')).toEqual(page.sampleInputData().age);
    expect(element(by.name('selectStatus')).getAttribute('value')).toEqual(page.sampleInputData().status);

    element(by.name('inputName')).sendKeys('1');
    element(by.css('input[type=submit]')).click();

    const list = element.all(by.className('tr-item-list'));
    expect(list.count()).toEqual(1);
    expect(list.get(0).all(by.tagName('td')).first().getText()).toEqual('Bob1');
  });
});

