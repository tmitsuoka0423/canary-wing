/**
 *
 */
class Options {
  private ignoreCertificateErrors: boolean = true;
  private incognito: boolean = true;
  private autoOpenDevtoolsForTabs: boolean = false;
  private disableWebSecurity: boolean = false;

  /**
   * オプション取得
   * @return {string} オプション
   */
  public getOptions(): string {
    const result: string[] = [];

    if (this.ignoreCertificateErrors) {
      result.push('--ignore-certificate-errors');
    }

    if (this.incognito) {
      result.push('--incognito');
    }

    if (this.autoOpenDevtoolsForTabs) {
      result.push('--auto-open-devtools-for-tabs');
    }

    if (this.disableWebSecurity) {
      result.push('--disable-web-security');
    }

    return result.join(' ');
  }

  /**
   * getter
   * @return {boolean} フラグ
   */
  public getIgnoreCertificateErrors() {
    return this.ignoreCertificateErrors;
  }

  /**
   * getter
   * @return {boolean} フラグ
   */
  public getIncognito() {
    return this.incognito;
  }

  /**
   * getter
   * @return {boolean} フラグ
   */
  public getAutoOpenDevtoolsForTabs() {
    return this.autoOpenDevtoolsForTabs;
  }

  /**
   * getter
   * @return {boolean} フラグ
   */
  public getDisableWebSecurity() {
    return this.disableWebSecurity;
  }

  /**
   * トグルオプション
   */
  public toggleIgnoreCertificateErrors() {
    this.ignoreCertificateErrors = !this.ignoreCertificateErrors;
  }

  /**
   * トグルオプション
   */
  public toggleIncognito() {
    this.incognito = !this.incognito;
  }

  /**
   * トグルオプション
   */
  public toggleAutoOpenDevtoolsForTabs() {
    this.autoOpenDevtoolsForTabs = !this.autoOpenDevtoolsForTabs;
  }

  /**
   * トグルオプション
   */
  public toggleDisableWebSecurity() {
    this.disableWebSecurity = !this.disableWebSecurity;
  }
}

export default Options;
