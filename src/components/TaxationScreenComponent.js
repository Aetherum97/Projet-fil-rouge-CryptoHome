import { Tabulator } from 'https://unpkg.com/tabulator-tables@6.2.1/dist/js/tabulator_esm.min.js';

export default class TaxationScreenComponent extends HTMLElement {
  constructor() {
    super();
    this.tableData = [];
    this.innerHTML = this.render();
  }

  connectedCallback() {
    this.querySelector("#investmentForm").onsubmit = this.handleTableFormSubmit.bind(this);
    this.InitTable();
  }

  handleTableFormSubmit(e) {
    e.preventDefault();

    const cryptoSelect = this.querySelector("#cryptoSelect");
    const amountEur = this.querySelector("#amountEur");
    const dateInput = this.querySelector("#dateInput");
    const priceCrypto = this.querySelector("#priceCrypto");

    const quantityCrypto = parseFloat(amountEur.value) / parseFloat(priceCrypto.value);

    const newEntry = {
      nomCrypto: cryptoSelect.value,
      date: dateInput.value,
      montantEur: parseFloat(amountEur.value),
      prixCrypto: parseFloat(priceCrypto.value),
      quantitéCrypto: quantityCrypto.toFixed(3),
    };

    this.tableData.push(newEntry);
    this.newTable.setData(this.tableData);

    this.UpdateBalances();

    cryptoSelect.value = "";
    amountEur.value = "";
    dateInput.value = "";
    priceCrypto.value = "";
  }

  InitTable() {
    this.newTable = new Tabulator(this.querySelector("#new-table"), {
      data: this.tableData,
      columns: [
        { title: "Nom Crypto", field: "nomCrypto", sorter: "string" },
        { title: "Date", field: "date", sorter: "date" },
        { title: "Montant €", field: "montantEur", sorter: "number" },
        { title: "Prix crypto", field: "prixCrypto", sorter: "number" },
        { title: "Quantité crypto", field: "quantitéCrypto", sorter: "number" },
      ],
    });
  }

  UpdateBalances() {
    let totalInvest = 0;
    let totalByCrypto = {};
    this.tableData.forEach((row) => {
      totalInvest += row.montantEur;
      if (!totalByCrypto[row.nomCrypto]) {
        totalByCrypto[row.nomCrypto] = 0;
      }
      totalByCrypto[row.nomCrypto] += row.montantEur;
    });
    this.querySelector("#totalInvest").innerText = totalInvest + "€";
    let crypto = this.querySelector("#cryptoSelect").value;
    this.querySelector("#totalByCrypto").innerText = totalByCrypto[crypto]
      ? totalByCrypto[crypto] + "€"
      : "0€";
  }

  render() {
    return `
      <link rel="stylesheet" href="./src/assets/styles/wallet/fisc.css">
      <div class="screenFisc">
      <div class="container text-center mt-5">
        <h3 class="text-white">Fiscalité</h3>
      </div>
      <div class="container">
        <form class="row g-5 mt-5" id="investmentForm">
          <div class="col-12 col-md-4 col-lg-2">
            <select class="form-select text-white" id="cryptoSelect" required>
              <option value="" selected disabled>Choisis une crypto</option>
              <option value="BTC">Bitcoin</option>
              <option value="ETH">Ethereum</option>
              <option value="USDT">Tether USDT</option>
              <option value="DOT">Polkadot</option>
            </select>
          </div>
          <div class="col-12 col-md-4 col-lg-2">
            <input type="number" class="form-control" placeholder="Montant investi" id="amountEur" step="0.01" min="0" required />
          </div>
          <div class="col-12 col-md-4 col-lg-2">
            <input type="number" class="form-control" placeholder="Prix crypto" id="priceCrypto" step="0.0001" min="0" required />
          </div>
          <div class="col-12 col-md-4 col-lg-2">
            <div class="input-group">
              <input type="date" class="form-control" id="dateInput" required />
              <button class="btn btn-outline-secondary" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                </svg>
              </button>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-2">
            <div class="text-invest">Solde investi/crypto :</div>
            <div id="totalByCrypto" class="text-white fw-semibold text-center">0€</div>
          </div>
          <div class="col-12 col-md-4 col-lg-2">
            <div class="text-invest">Solde total investi :</div>
            <div id="totalInvest" class="text-white fw-semibold text-center">0€</div>
          </div>
        </form>
      </div>
      <div class="container text-center text-white mt-5">
        <h6>Tableaux récap de cession :</h6>
      </div>
      <div class="container-fluid d-flex justify-content-center mt-5">
        <div id="new-table"></div>
      </div>
      </div>
    `;
  }
}

customElements.define("taxationscreen-component", TaxationScreenComponent);
