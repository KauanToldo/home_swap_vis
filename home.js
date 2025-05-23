looker.plugins.visualizations.add({
    id: "home_swap",
    label: "Home",
    options: {
      
    },
    create: function(element, config) {
      this._tableContainer = element.appendChild(document.createElement("div"));  
    },


    updateAsync: function(data, element, config, queryResponse, details, done) {
        this.clearErrors();

        this._tableContainer.innerHTML = `  
        <style>
            .card:hover {
                scale: 1.05;
                transition: .2s ease;
                box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
            }
            
            .card {
                transition: .2s ease;
                cursor: pointer;
            }

            #vis {
                margin: 0 !important;
                padding: 0 !important;
                width: 100% !important;
            }

            .btn-new-version {
                border-radius: 12px ;
                border: transparent;
                padding: 15px;
                margin-top: 20px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                font-size: 15px;
                background-color: #ffffff;
                cursor: pointer;
                transition: .2s ease;
            }

            .btn-new-version:hover {
                scale: 1.05;
                box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
            }

            body {
                width: 100% !important;
            }

        </style>
        <div style="position: relative;z-index: 5; width: 100%; height: 100vh; margin: 0; padding: 0; overflow: hidden; box-sizing: border-box; font-family: 'Montserrat', sans-serif; display: flex; justify-content: center; align-items: center;
            background-image: url(https://cdn.prod.website-files.com/60145959f19bd32ea3ea4d53/6706d7d50a21372063d65ef5_swap-new-banner.png);
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;">

            <img id="logo" src="https://cdn.prod.website-files.com/60145959f19bd32ea3ea4d53/6706d71074cb86ba3520b7a0_swap-logo-2024.svg" alt="Logo" style="width: 150px; position: absolute; top: 30px; left: 45px;">

            <div style="display: flex; align-items: center; justify-content: center; margin: 100px 50px;">

            <div style="text-align: center;">
                <span style="color: black; margin: 0; font-weight: normal;">Olá, seja bem vindo(a) ao</span>
                <h1 style="margin-top: 10px;margin-bottom: 30px; color: #E53516;">Painel de Cobrança</h1>
                <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
                
                <div class="card" id="card1" style="background-color: #ffffff; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); border-radius: 12px; width: 350px; overflow: hidden;">
                    <img src="https://img.freepik.com/free-photo/person-office-analyzing-checking-finance-graphs_23-2150377128.jpg?ga=GA1.1.908972054.1747658034&semt=ais_hybrid&w=740" alt="Imagem 1" style="width: 100%; height: 200px; object-fit: cover;">
                    <div style="padding: 20px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 5px;">
                    <h1 style="display: flex; align-items: center;font-size: 20px; margin-bottom: 8px; font-weight: bold; color: #333; text-decoration: none; display: block; cursor: pointer;">Resultado Operacional</h1>
                    <img src="https://cdn-icons-png.flaticon.com/512/5422/5422411.png" alt="Redirecionar" width="25" height="25" style="margin-top: -4px;">
                    </div>
                </div>

                <div class="card" id="card2" style="background-color: #ffffff; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); border-radius: 12px; width: 350px; overflow: hidden;">
                    <img src="https://img.freepik.com/free-photo/cooperation-analyst-chart-professional-paper-economics_1418-47.jpg?ga=GA1.1.908972054.1747658034&semt=ais_hybrid&w=740" alt="Imagem 2" style="width: 100%; height: 200px; object-fit: cover;">
                    <div style="padding: 20px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 5px;">
                    <h1 style="display: flex; align-items: center; font-size: 20px; margin-bottom: 8px; font-weight: bold; color: #333; text-decoration: none; display: block; cursor: pointer;">Operação</h1>
                    <img src="https://cdn-icons-png.flaticon.com/512/5422/5422411.png" alt="Redirecionar" width="25" height="25" style="margin-top: -6px;">
                    </div>
                </div>

                <div class="card" id="card3" style="background-color: #ffffff; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); border-radius: 12px; width: 350px; overflow: hidden;">
                    <img src="https://img.freepik.com/free-photo/close-up-coins-saved-energy-crisis-expenses_23-2150061829.jpg?ga=GA1.1.908972054.1747658034&semt=ais_hybrid&w=740" alt="Imagem 3" style="width: 100%; height: 200px; object-fit: cover;">
                    <div style="padding: 20px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 5px;">
                    <h1 style="display: flex; align-items: center; font-size: 20px; margin-bottom: 8px; font-weight: bold; color: #333; text-decoration: none; display: block; cursor: pointer;">Receitas e Custos</h1>
                    <img src="https://cdn-icons-png.flaticon.com/512/5422/5422411.png" alt="Redirecionar" width="25" height="25" style="margin-top: -6px;">
                    </div>
                </div>
                      
                </div>
                <a href="https://swapbi.cloud.looker.com/embed/dashboards/40" target="_blank"><button class="btn-new-version">Operação Versão Nova</button></a>
            </div>
            </div>

        </div>`

        done();
        document.querySelector("#card1").addEventListener("click", () => {
            window.open("https://swapbi.cloud.looker.com/embed/dashboards/37", "_blank");
        })
        document.querySelector("#card2").addEventListener("click", () => {
            window.open("https://swapbi.cloud.looker.com/embed/dashboards/38", "_blank");
        })
        document.querySelector("#card3").addEventListener("click", () => {
            window.open("https://swapbi.cloud.looker.com/embed/dashboards/39", "_blank");
        })
}});