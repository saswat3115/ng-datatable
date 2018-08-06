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

  getModalWindow() {
    return element(by.className('modal-body')).getAttribute('id');
  }
}
