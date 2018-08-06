import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root div')).getAttribute('class');
  }

  getAddButton() {
    return element(by.buttonText('Add New'));
  }

  getEditButton() {
    return element(by.buttonText('Edit'));
  }

  getDeleteButton() {
    return element(by.buttonText('Delete'));
  }

  getModalWindow() {
    return element(by.className('modal-body')).getAttribute('id');
  }

  addNewItemToTable(data) {
    this.getAddButton().click();

    element(by.name('inputName')).sendKeys(data.name);
    element(by.name('address')).sendKeys(data.address);
    element(by.name('age')).sendKeys(data.age);
    element(by.name('selectStatus')).sendKeys(data.status);

    element(by.css('input[type=submit]')).click();
  }

  sampleInputData() {
    return {name: 'Bob', address: 'Hyderabad', age: '25', status: 'active'};
  }
}
