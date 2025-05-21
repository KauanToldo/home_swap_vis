looker.plugins.visualizations.add({
    id: "home_swap",
    label: "Home",
    options: {
      
    },
    create: function(element, config) {
      this._tableContainer = element.appendChild(document.createElement("div"));
      this._tableContainer.innerHTML = `
      <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

        </head>
        <body>
        <style>
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }

            .card {
                cursor: pointer;
                transition: .2s ease;
            }

            .card:hover {
                scale: 1.05;
                box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
            }

                .
        </style>
        <div style="position: relative;z-index: 5; width: 100%; height: 100vh; margin: 0; padding: 0; overflow: hidden; box-sizing: border-box; font-family: 'Montserrat', sans-serif;;
        background-image: url(https://cdn.prod.website-files.com/60145959f19bd32ea3ea4d53/6706d7d50a21372063d65ef5_swap-new-banner.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;">
            <div style="height: 8vh; width: 100%; padding: 25px 45px; display: flex; align-items: center;">
            <img id="logo" src="https://cdn.prod.website-files.com/60145959f19bd32ea3ea4d53/6706d71074cb86ba3520b7a0_swap-logo-2024.svg" alt="Logo" style="width: 150px;">
            </div>

            <div style="margin-top: 10vh;display: flex; align-items: center; justify-content: center;">
            <div style="text-align: center;">
                <span style="color: black; margin: 0; font-weight: normal;">Olá, seja bem vindo(a) ao</span>
                <h1 style="margin-top: 10px;margin-bottom: 30px; color: #E53516;">Painel de Cobrança</h1>
                <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
                
                <div class="card" id="card1" style="background-color: #ffffff; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); border-radius: 12px; width: 350px; overflow: hidden;">
                    <img src="https://img.freepik.com/free-photo/person-office-analyzing-checking-finance-graphs_23-2150377128.jpg?ga=GA1.1.908972054.1747658034&semt=ais_hybrid&w=740" alt="Imagem 1" style="width: 100%; height: 200px; object-fit: cover;">
                    <div style="padding: 20px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 5px;">
                    <a href="https://swapbi.cloud.looker.com/dashboards/37" style="display: flex; align-items: center;font-size: 20px; margin-bottom: 8px; font-weight: bold; color: #333; text-decoration: none; display: block; cursor: pointer;">Resultado Operacional</a>
                    <img src="https://cdn-icons-png.flaticon.com/512/5422/5422411.png" alt="Redirecionar" width="25" height="25" style="margin-top: -4px;">
                    </div>
                </div>

                <div class="card" id="card2" style="background-color: #ffffff; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); border-radius: 12px; width: 350px; overflow: hidden;">
                    <img src="https://img.freepik.com/free-photo/cooperation-analyst-chart-professional-paper-economics_1418-47.jpg?ga=GA1.1.908972054.1747658034&semt=ais_hybrid&w=740" alt="Imagem 2" style="width: 100%; height: 200px; object-fit: cover;">
                    <div style="padding: 20px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 5px;">
                    <a href="https://swapbi.cloud.looker.com/dashboards/38" style="display: flex; align-items: center; font-size: 20px; margin-bottom: 8px; font-weight: bold; color: #333; text-decoration: none; display: block; cursor: pointer;">Operação</a>
                    <img src="https://cdn-icons-png.flaticon.com/512/5422/5422411.png" alt="Redirecionar" width="25" height="25" style="margin-top: -6px;">
                    </div>
                </div>

                <div class="card" id="card3" style="background-color: #ffffff; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); border-radius: 12px; width: 350px; overflow: hidden;">
                    <img src="https://img.freepik.com/free-photo/close-up-coins-saved-energy-crisis-expenses_23-2150061829.jpg?ga=GA1.1.908972054.1747658034&semt=ais_hybrid&w=740" alt="Imagem 3" style="width: 100%; height: 200px; object-fit: cover;">
                    <div style="padding: 20px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 5px;">
                    <a href="https://swapbi.cloud.looker.com/dashboards/39" style="display: flex; align-items: center; font-size: 20px; margin-bottom: 8px; font-weight: bold; color: #333; text-decoration: none; display: block; cursor: pointer;">Receitas e Custos</a>
                    <img src="https://cdn-icons-png.flaticon.com/512/5422/5422411.png" alt="Redirecionar" width="25" height="25" style="margin-top: -6px;">
                    </div>
                </div>

                </div>
            </div>
            </div>

        </div>

        </body>
        </html>
      `
        
    },
    // Render in response to the data or settings changing
    updateAsync: function(data, element, config, queryResponse, details, done) {
        this.clearErrors();

        this._tableContainer.innerHTML = `
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

                </head>
                <body>
                <style>
                    * {
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                    }

                    .card {
                        cursor: pointer;
                        transition: .2s ease;
                    }

                    .card:hover {
                        scale: 1.05;
                        box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
                    }

                        .
                </style>
                <div style="position: relative;z-index: 5; width: 100%; height: 100vh; margin: 0; padding: 0; overflow: hidden; box-sizing: border-box; font-family: 'Montserrat', sans-serif;;
                background-image: url(https://cdn.prod.website-files.com/60145959f19bd32ea3ea4d53/6706d7d50a21372063d65ef5_swap-new-banner.png);
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;">
                    <div style="height: 8vh; width: 100%; padding: 25px 45px; display: flex; align-items: center;">
                    <img id="logo" src="https://cdn.prod.website-files.com/60145959f19bd32ea3ea4d53/6706d71074cb86ba3520b7a0_swap-logo-2024.svg" alt="Logo" style="width: 150px;">
                    </div>

                    <div style="margin-top: 10vh;display: flex; align-items: center; justify-content: center;">
                    <div style="text-align: center;">
                        <span style="color: black; margin: 0; font-weight: normal;">Olá, seja bem vindo(a) ao</span>
                        <h1 style="margin-top: 10px;margin-bottom: 30px; color: #E53516;">Painel de Cobrança</h1>
                        <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
                        
                        <div class="card" id="card1" style="background-color: #ffffff; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); border-radius: 12px; width: 350px; overflow: hidden;">
                            <img src="https://storage.googleapis.com/looker_styles_servopa/imagens/c01-miniatura.jpg" alt="Imagem 1" style="width: 100%; height: 200px; object-fit: cover;">
                            <div style="padding: 20px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 5px;">
                            <a href="https://swapbi.cloud.looker.com/dashboards/37" style="display: flex; align-items: center;font-size: 20px; margin-bottom: 8px; font-weight: bold; color: #333; text-decoration: none; display: block; cursor: pointer;">Resultado Operacional</a>
                            <img src="https://cdn-icons-png.flaticon.com/512/5422/5422411.png" alt="Redirecionar" width="25" height="25" style="margin-top: -4px;">
                            </div>
                        </div>

                        <div class="card" id="card2" style="background-color: #ffffff; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); border-radius: 12px; width: 350px; overflow: hidden;">
                            <img src="https://storage.googleapis.com/looker_styles_servopa/imagens/g01_1-miniatura.jpg" alt="Imagem 2" style="width: 100%; height: 200px; object-fit: cover;">
                            <div style="padding: 20px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 5px;">
                            <a href="https://swapbi.cloud.looker.com/dashboards/38" style="display: flex; align-items: center; font-size: 20px; margin-bottom: 8px; font-weight: bold; color: #333; text-decoration: none; display: block; cursor: pointer;">Operação</a>
                            <img src="https://cdn-icons-png.flaticon.com/512/5422/5422411.png" alt="Redirecionar" width="25" height="25" style="margin-top: -6px;">
                            </div>
                        </div>

                        <div class="card" id="card3" style="background-color: #ffffff; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); border-radius: 12px; width: 350px; overflow: hidden;">
                            <img src="https://storage.googleapis.com/looker_styles_servopa/imagens/g02_1-miniatura.jpg" alt="Imagem 3" style="width: 100%; height: 200px; object-fit: cover;">
                            <div style="padding: 20px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 5px;">
                            <a href="https://swapbi.cloud.looker.com/dashboards/39" style="display: flex; align-items: center; font-size: 20px; margin-bottom: 8px; font-weight: bold; color: #333; text-decoration: none; display: block; cursor: pointer;">Receitas e Custos</a>
                            <img src="https://cdn-icons-png.flaticon.com/512/5422/5422411.png" alt="Redirecionar" width="25" height="25" style="margin-top: -6px;">
                            </div>
                        </div>

                        </div>
                    </div>
                    </div>

                </div>

                </body>
                </html>
            `

        done();
        document.querySelector("#card1").addEventListener("click", () => {
            window.open("https://swapbi.cloud.looker.com/dashboards/37", "_blank");
        })
        document.querySelector("#card2").addEventListener("click", () => {
            window.open("https://swapbi.cloud.looker.com/dashboards/38", "_blank");
        })
        document.querySelector("#card3").addEventListener("click", () => {
            window.open("https://swapbi.cloud.looker.com/dashboards/39", "_blank");
        })
}});