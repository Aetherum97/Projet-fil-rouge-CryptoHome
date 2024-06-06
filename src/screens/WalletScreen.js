import Screen from "./Screen.js";

export default class WalletScreen extends Screen {
  render() {
    return `
    <header>
      <navbar-component/>
    </header>


    <div>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
	  <style>
		body {
			background-color: #011526;
		}

		label {
			color: #B3DAF2;
			font-weight: 700;
		}

		legend {
			font-weight: 700;
			color: #B3DAF2;
			display: flex;
			justify-content: center;
		}

		input.form-control {
			background-color: #011526;
			border-radius: 35px;
			border-color: #F28705;
			color: white;
		}

		input::placeholder {
			text-align: center;
			color: #bbbbbb !important;
		}

		.controlButtons {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.btn-edit,
		.btn-lock {
			margin-left: 10px;
		}

		.btn-edit {
			background-color: #28a745;
			color: white;
		}

		.btn-lock {
			background-color: #dc3545;
			color: white;
		}

		.container-form {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 10rem;
		}

		div.card {
			border-width: 2.5px;
			border-color: #F28705;
			border-radius: 35px;
			background-color: #011526;
		}

		.card-body {
			padding: 2rem;
		}

		.btn-submit {
			background-color: #023859;
			color: #B3DAF2;
			border-radius: 35px;
			border-color: #F28705;
			font-weight: 700;
		}
	</style>
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
