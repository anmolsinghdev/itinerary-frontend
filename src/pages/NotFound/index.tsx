import React from 'react'

const NotFound = (): React.ReactElement => {
  return (
    <div
      className="h-screen flex items-center justify-center flex-col"
      style={{
        backgroundColor: '#201F1F',
      }}
    >
      <p className="text-blue-700 text-9xl">404</p>
      <p className="text-white mb-3">Oops! Something wrong…</p>
      <div className="flex gap-3">
        <button className="bg-blue-400 p-2 rounded text-white">Go Back</button>
        <button className="bg-white p-2 rounded ">Go to Dashboard</button>
      </div>
      {/* <p className="text-white">
        Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus
        mollis interdum.
      </p> */}
    </div>
  )
}

export default NotFound
