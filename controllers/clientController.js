const fs = require('fs');
const path = require('path');
const clientsPath = path.join(__dirname, '../data/clients.json');

const readClients = () => {
    const data = fs.readFileSync(clientsPath);
    return JSON.parse(data);
};

const writeClients = (clients) => {
    fs.writeFileSync(clientsPath, JSON.stringify(clients, null, 2));
};

exports.getHome = (req, res) => {
    res.render('pages/home', { title: 'Home' });
};

exports.getClients = (req, res) => {
    const clients = readClients();
    res.render('pages/clients', { title: 'Clients', clients });
};

exports.getClientDetails = (req, res) => {
    const clients = readClients();
    const clientId = parseInt(req.params.id);
    const client = clients.find(c => c.id === clientId);
    if (!client) return res.status(404).send('Client is not found');
    res.render('pages/clientDetails', { title: 'Client Details', client });
};

exports.getAddClient = (req, res) => {
    res.render('pages/addClient', { title: 'Add Client' });
};

exports.postAddClient = (req, res) => {
    const clients = readClients();
    const { name, email, service, riskLevel } = req.body;

    const newId = clients.length ? clients[clients.length - 1].id + 1 : 1;
    const newClient = { id: newId, name, email, service, riskLevel };
    clients.push(newClient);
    writeClients(clients);

    res.redirect('/clients');
};

exports.getEditClient = (req, res) => {
    const clients = readClients();
    const clientId = parseInt(req.params.id);
    const client = clients.find(c => c.id === clientId);
    if (!client) return res.status(404).send('Client not found');
    res.render('pages/editClient', { title: 'Edit Client', client });
};

exports.postEditClient = (req, res) => {
    const clients = readClients();
    const clientId = parseInt(req.params.id);
    const clientIndex = clients.findIndex(c => c.id === clientId);
    if (clientIndex === -1) return res.status(404).send('Client not found');

    const { name, email, service, riskLevel } = req.body;
    clients[clientIndex] = { id: clientId, name, email, service, riskLevel };
    writeClients(clients);

    res.redirect('/clients');
};

exports.getDeleteClient = (req, res) => {
    const clients = readClients();
    const clientId = parseInt(req.params.id);
    const client = clients.find(c => c.id === clientId);
    if (!client) return res.status(404).send('Client is not found');
    res.render('pages/deleteClient', { title: 'Delete the Client', client });
};

exports.postDeleteClient = (req, res) => {
    let clients = readClients();
    const clientId = parseInt(req.params.id);
    clients = clients.filter(c => c.id !== clientId);
    writeClients(clients);
    res.redirect('/clients');
};