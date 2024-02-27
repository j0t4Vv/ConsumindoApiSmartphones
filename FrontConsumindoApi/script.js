async function carregarClientes() {
    try {
        // Requisição à API
        let response = await fetch('https://localhost:7128/api/Clientes');
        
        // Verifica se a requisição foi bem-sucedida (status 200)
        if (response.ok) {
            // Converte a resposta para JSON
            let data = await response.json();
            
            // Seleciona o corpo da tabela de clientes
            let tabelaClientes = document.getElementById('tabelaClientes');
            
            // Limpa o conteúdo atual da tabela
            tabelaClientes.innerHTML = '';

            // Itera sobre os dados retornados e cria uma linha na tabela para cada cliente
            data.forEach(cliente => {
                let row = tabelaClientes.insertRow();
                row.innerHTML = `
                    <td>${cliente.id}</td>
                    <td>${cliente.nome}</td>
                    <td>${cliente.endereco}</td>
                    <td>${cliente.email}</td>
                    <td>${cliente.cpf}</td>
                    <td>${cliente.contato}</td>
                    <td>${cliente.modelo}</td>
                `;
            });
        } else {
            console.error('Erro ao carregar dados dos clientes:', response.status);
        }
    } catch (error) {
        console.error('Erro ao carregar dados dos clientes:', error);
    }
}

async function carregarMarcas() {
    try {
        // Requisição à API
        let response = await fetch('https://localhost:7128/api/Marcas');
        
        // Verifica se a requisição foi bem-sucedida (status 200)
        if (response.ok) {
            // Converte a resposta para JSON
            let data = await response.json();
            
            // Seleciona o corpo da tabela de marcas
            let tabelaMarcas = document.getElementById('tabelaMarcas');
            
            // Limpa o conteúdo atual da tabela
            tabelaMarcas.innerHTML = '';

            // Itera sobre os dados retornados e cria uma linha na tabela para cada marca
            data.forEach(marca => {
                let row = tabelaMarcas.insertRow();
                row.innerHTML = `
                    <td>${marca.id}</td>
                    <td>${marca.nome}</td>
                    <td>${marca.contato}</td>
                    <td>${marca.modelo}</td>
                `;
            });
        } else {
            console.error('Erro ao carregar dados das marcas:', response.status);
        }
    } catch (error) {
        console.error('Erro ao carregar dados das marcas:', error);
    }
}

async function carregarVendedores() {
    try {
        // Requisição à API
        let response = await fetch('https://localhost:7128/api/Vendedores');
        
        // Verifica se a requisição foi bem-sucedida (status 200)
        if (response.ok) {
            // Converte a resposta para JSON
            let data = await response.json();
            
            // Seleciona o corpo da tabela de Vendedores
            let tabelaVendedores = document.getElementById('tabelaVendedores');
            
            // Limpa o conteúdo atual da tabela
            tabelaVendedores.innerHTML = '';

            // Itera sobre os dados retornados e cria uma linha na tabela para cada vendedor
            data.forEach(vendedor => {
                let row = tabelaVendedores.insertRow();
                row.innerHTML = `
                    <td>${vendedor.id}</td>
                    <td>${vendedor.nome}</td>
                    <td>${vendedor.contato}</td>
                    <td>${vendedor.marca}</td>
                    <td>${vendedor.modelo}</td>
                `;
            });
        } else {
            console.error('Erro ao carregar dados dos vendedores:', response.status);
        }
    } catch (error) {
        console.error('Erro ao carregar dados dos vendedores:', error);
    }
}

// Função para carregar todas as tabelas quando o botão for clicado
document.getElementById('atualizarTabelas').addEventListener('click', async () => {
    await carregarClientes();
    await carregarMarcas();
    await carregarVendedores();
});
