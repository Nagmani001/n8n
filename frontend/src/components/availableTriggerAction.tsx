export default function AvailableTriggerAction({ imageUrl, title, description, onClick }: {
  imageUrl: string,
  title: string,
  description: string
  onClick: any
}) {
  return (
    <button className="cursor-pointer" onClick={onClick} >
      <div className="flex items-start space-x-3 bg-white text-gray-900 p-4 rounded-lg shadow-md border border-gray-200 max-w-sm">
        <img
          src={imageUrl}
          alt={title}
          className="w-15 h-15 mt-1"
        />

        <div>
          <h3 className="font-medium text-base">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </button>
  );
}
