import { TopDealUsers } from "../data"

const TopBox = () => {
  return (
    <section className="">
        <h1 className="mb-5 text-xl font-bold">Top Deals</h1>
        <div className="list">
            {TopDealUsers.map((user) => (
                <div className="flex items-center justify-between mb-7" key={user.id}>
                    <div className="flex items-center gap-2">
                        <img src={user.img} alt="user" className="w-8 h-8 rounded-full object-cover"/>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-medium">{user.username}</span>
                            <span className="text-xs">{user.email}</span>
                        </div>
                    </div>
                    <span className="font-medium text-sm">${user.amount}</span>
                </div>
            ))}
        </div>
    </section>
  )
}

export default TopBox