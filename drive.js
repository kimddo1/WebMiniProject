const CLIENT_ID = 'YOUR_CLIENT_ID.apps.googleusercontent.com';
const API_KEY = 'YOUR_API_KEY';
const SHARED_DRIVE_ID = 'YOUR_SHARED_DRIVE_ID';
const SCOPES = 'https://www.googleapis.com/auth/drive';

let tokenClient;
let accessToken = null;

window.onload = () => {
  gapi.load('client', async () => {
    await gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
    });
  });

  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: (resp) => {
      if (resp.access_token) {
        accessToken = resp.access_token;
        alert('✅ 로그인 성공!');
      } else {
        alert('❌ 로그인 실패!');
      }
    },
  });
};

function handleAuthClick() {
  tokenClient.requestAccessToken();
}

async function listSharedDrives() {
  const res = await gapi.client.drive.drives.list();
  const ul = document.getElementById('driveList');
  ul.innerHTML = '';
  res.result.drives?.forEach(drive => {
    const li = document.createElement('li');
    li.textContent = `${drive.name} (ID: ${drive.id})`;
    ul.appendChild(li);
  });
}

async function listTrashedFiles() {
  const res = await gapi.client.drive.files.list({
    q: 'trashed = true',
    fields: 'files(id, name)',
  });
  const ul = document.getElementById('trashList');
  ul.innerHTML = '';
  res.result.files.forEach(file => {
    const li = document.createElement('li');
    li.textContent = file.name;
    ul.appendChild(li);
  });
}

async function listFolderContents(folderId = 'root') {
  const res = await gapi.client.drive.files.list({
    q: `'${folderId}' in parents and trashed = false`,
    fields: 'files(id, name, owners, modifiedTime, size, mimeType)',
    supportsAllDrives: true,
    includeItemsFromAllDrives: true,
  });

  const tbody = document.getElementById('fileListBody');
  tbody.innerHTML = '';

  res.result.files.forEach(file => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${file.name}</td>
      <td>${file.owners?.[0]?.emailAddress || 'N/A'}</td>
      <td>${new Date(file.modifiedTime).toLocaleString()}</td>
      <td>${file.mimeType.includes('folder') ? '—' : (file.size ? formatBytes(Number(file.size)) : '0 B')}</td>
    `;
    tbody.appendChild(tr);
  });
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function listMyDriveFiles() {
  const files = [
    { name: 'Report.docx', owner: 'me@example.com', modified: '2025-04-10', size: '24KB' },
    { name: 'Data.xlsx', owner: 'me@example.com', modified: '2025-04-09', size: '88KB' },
  ];

  const tbody = document.getElementById('myDriveFileList');
  tbody.innerHTML = '';

  files.forEach(file => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${file.name}</td>
      <td>${file.owner}</td>
      <td>${file.modified}</td>
      <td>${file.size}</td>
    `;
    tbody.appendChild(tr);
  });
}

async function listRecentFiles() {
  const res = await gapi.client.drive.files.list({
    q: "modifiedTime > '2024-01-01T00:00:00'",
    orderBy: 'modifiedTime desc',
    pageSize: 10,
    fields: 'files(id, name, modifiedTime)',
  });

  const ul = document.getElementById('recentList');
  ul.innerHTML = '';
  res.result.files.forEach(file => {
    const li = document.createElement('li');
    li.textContent = `${file.name} (Modified: ${new Date(file.modifiedTime).toLocaleDateString()})`;
    ul.appendChild(li);
  });
}