let platform = process.env.PLATFORM.toLocaleLowerCase();

class VeiculosPage {
  ///// Views /////
  viewDetalhesPage() {
    if (platform === 'ios') { return driver.element('xpath', '//XCUIElementTypeNavigationBar[@name="Detalhes"]'); }
    return driver.element('xpath', '//*[@text="Detalhes do Carro"]');
  }

  viewVeiculosPage() { 
    if (platform === 'ios') { return driver.element('xpath', '//XCUIElementTypeNavigationBar[@name="Veículos"]'); }
    return driver.element('xpath', '//*[@text="Carros"]');
  }

  viewVeiculo(veiculo, ano, modelo) {
    if (platform === 'ios') { return driver.element('xpath', `(//*[@name="${veiculo}"]//..//*[@name="${ano}/${modelo}"])[1]`); }
    return driver.element('xpath', `(//*[@text="${veiculo}"]//..//*[contains(@text,"${modelo}/${ano}")])[1]`);
  }

  ///// BTN /////
  btnVoltar() { 
    if (platform === 'ios') { return driver.elementByAccessibilityId('Veículos'); }
    return driver.elementByAccessibilityId('Navigate up');
  }

  ///// TXT /////
  txtCorVeiculo(cor) { 
    if (platform === 'ios') { return driver.elementByAccessibilityId(`${cor}`); }
    return driver.element('xpath', `//*[@text="${cor}"]`);
  }

  txtKmVeiculo(km) { 
    if (platform === 'ios') { return driver.elementByAccessibilityId(`${km} km`); }
    return driver.element('xpath', `//*[@text="${km}KM"]`);
  }

  txtValorVeiculo(valor) { 
    let price;
    if (platform === 'ios') { 
      price = valor.replace('.', '');
      return driver.elementByAccessibilityId(`${price}`); 
    } else {
      price = valor.replace(/\s/g, '');
      return driver.element('xpath', `//*[@text="${price}"]`);
    }
  }

  txtVersaoVeiculo(versao) { 
    if (platform === 'ios') { return driver.elementByAccessibilityId(`${versao}`); }
    return driver.element('xpath', `//*[@text="${versao}"]`);
  }
}

module.exports = VeiculosPage