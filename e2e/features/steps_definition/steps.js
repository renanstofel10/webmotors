// Imports
const { Given, When, Then } = require('@cucumber/cucumber');

// Instances
const Common = require('../../pages/common.js');
const common = new Common();

const Veiculos = require('../../pages/veiculos.js');
const veiculos = new Veiculos();

//Steps
Given('que usuário esteja na listagem de veículos', {timeout: 30000}, async () => {
  await common.waitElement(veiculos.viewVeiculosPage());
});

When('usuário selecionar o veículo {string} ano {string} modelo {string}', {timeout: 30000}, async (veiculo, ano, modelo) => {
  await common.clickElement(veiculos.viewVeiculo(veiculo, ano, modelo));
});

Then('sistema exibe os detalhes do veículo', {timeout: 30000}, async () => {
  await common.waitElement(veiculos.viewDetalhesPage());
});

Then('sistema exibe a cor {string} do veículo', {timeout: 30000}, async (cor) => {
  await common.waitElement(veiculos.txtCorVeiculo(cor));
});

Then('sistema exibe o valor {string} do veículo', {timeout: 30000}, async (valor) => {
  await common.waitElement(veiculos.txtValorVeiculo(valor));
});

Then('sistema exibe a kilometragem {string} do veículo', {timeout: 30000}, async (km) => {
  await common.waitElement(veiculos.txtKmVeiculo(km));
});

Then('sistema exibe a versao {string} do veículo', {timeout: 30000}, async (versao) => {
  await common.waitElement(veiculos.txtVersaoVeiculo(versao));
});

Then('usuário retorna para listagem de veículos', {timeout: 30000}, async () => {
  await common.clickElement(veiculos.btnVoltar());
  await common.waitElement(veiculos.viewVeiculosPage());
  if (process.env.PLATFORM === 'android') { await common.scroll(); }
});