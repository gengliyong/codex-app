const status = document.querySelector('#status');
const statusText = document.querySelector('#status-text');
const fields = {
  node: document.querySelector('#node'),
  uptime: document.querySelector('#uptime'),
  time: document.querySelector('#time'),
};

function setStatus(state, text) {
  status.dataset.state = state;
  statusText.textContent = text;
}

async function checkHealth() {
  setStatus('pending', '正在检查 /api/health …');

  try {
    const response = await fetch('/api/health');
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    fields.node.textContent = data.node;
    fields.uptime.textContent = `${data.uptimeSeconds} 秒`;
    fields.time.textContent = new Date(data.time).toLocaleString('zh-CN');
    setStatus('ok', '服务正常');
  } catch (error) {
    setStatus('fail', `请求失败：${error.message}`);
  }
}

document.querySelector('#refresh').addEventListener('click', checkHealth);
checkHealth();