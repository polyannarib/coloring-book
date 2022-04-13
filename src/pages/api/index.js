// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  if (req.method === "GET") {
      handleGet(req, res)
  }
  else {
      res.status(405).send()
  }
}

function handleGet(req, res) {
  let hexColor = randomColor()
  res.status(200).json({
      color: hexColor,
  })
}

function randomColor() {
  var randomColor = "#000000".replace(/0/g, function() {
        return (~~(Math.random()*16)).toString(16);
      }
  );
  return randomColor
}
