import Screen from "./Screen.js";

export default class WalletScreen extends Screen {
  render() {
    return `<style>@import "./src/assets/styles/wallet/adresses.css"</style>
    <header>
		<navbar-component/>
    </header>

<div>
</head>
<body>
	<div class="container-form">
		<div class="card" style="width: 55rem">
			<div class="card-body">
				<legend>Gestionnaire des adresses blockchain</legend>
				<form id="adresseForm">
					<div class="form-group">
						<label for="adresse1" class="form-label">Adresse 1</label>
						<div class="input-group">
							<input type="text" class="form-control" id="adresse1"
								placeholder="Saisissez votre adresse...">
							<div class="input-group-append controlButtons">
								<button type="button" class="btn btn-edit">Editer</button>
								<button type="button" class="btn btn-lock">Verrouiller</button>
							</div>
						</div>
					</div>
					<div class="form-group">
						<label for="adresse2" class="form-label">Adresse 2</label>
						<div class="input-group">
							<input type="text" class="form-control" id="adresse2"
								placeholder="Saisissez votre adresse...">
							<div class="input-group-append controlButtons">
								<button type="button" class="btn btn-edit">Editer</button>
								<button type="button" class="btn btn-lock">Verrouiller</button>
							</div>
						</div>
					</div>
					<div class="form-group">
						<label for="adresse3" class="form-label">Adresse 3</label>
						<div class="input-group">
							<input type="text" class="form-control" id="adresse3"
								placeholder="Saisissez votre adresse...">
							<div class="input-group-append controlButtons">
								<button type="button" class="btn btn-edit">Editer</button>
								<button type="button" class="btn btn-lock">Verrouiller</button>
							</div>
						</div>
					</div>
					<div class="form-group">
						<label for="adresse4" class="form-label">Adresse 4</label>
						<div class="input-group">
							<input type="text" class="form-control" id="adresse4"
								placeholder="Saisissez votre adresse...">
							<div class="input-group-append controlButtons">
								<button type="button" class="btn btn-edit">Editer</button>
								<button type="button" class="btn btn-lock">Verrouiller</button>
							</div>
						</div>
					</div>
					<div class="form-group text-center">
						<button type="submit" class="btn btn-submit">Sauvegarder</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	<script>
		document.querySelectorAll('.btn-edit').forEach(button => {
			button.addEventListener('click', (event) => {
				const input = event.target.closest('.input-group').querySelector('input');
				input.disabled = !input.disabled;
				if (input.disabled) {
					event.target.textContent = 'Editer';
				} else {
					event.target.textContent = 'Enregistrer';
				}
			});
		});

		document.querySelectorAll('.btn-lock').forEach(button => {
			button.addEventListener('click', (event) => {
				const input = event.target.closest('.input-group').querySelector('input');
				input.disabled = true;
			});
		});
	</script>
</body>
</div>


    <footer>
		<footerdesktop-component/>
    </footer>
        `;
  }
}
customElements.define("wallet-screen", WalletScreen);
