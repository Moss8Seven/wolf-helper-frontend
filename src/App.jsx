// 删除原有代码，替换为以下内容
import { useState } from 'react'

function App() {
  const [role, setRole] = useState('villager')
  const [advice, setAdvice] = useState('')

  const getAdvice = async () => {
    const mockHistory = ["1号玩家说我是好人", "2号玩家怀疑3号"]
    const response = await fetch('http://localhost:8001/advice', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ role, history: mockHistory })
    })
    const data = await response.json()
    setAdvice(data.advice)
  }
  
  return (
    <div style={{ padding: 20 }}>
      <h1>狼人杀发言助手（测试版）</h1>
      <div>
        <label>选择你的身份：</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="werewolf">狼人</option>
          <option value="villager">平民</option>
          <option value="prophet">预言家</option>
          <option value="witch">女巫</option>
          <option value="hunter">猎人</option>
        </select>
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={getAdvice}>获取发言建议</button>
        {advice && <div style={{ marginTop: 10, color: 'green' }}>{advice}</div>}
      </div>
    </div>
  )
}

export default App