import img from "../../../assets/image in blog.png";

const BlogContent = () => {
  return (
    <div className="flex flex-col items-center lg:items-start px-6 lg:px-0 lg:max-w-[684px] gap-6">
      <p className="text-base font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        minima provident cum dolor accusantium ut porro illum veritatis fugiat,
        pariatur, numquam at. Maiores, tempora? Iure incidunt quae consequatur
        in laboriosam!
      </p>
      <h2 className="text-[40px]">ГОЛОВНА ТЕМА ГОЛОВНА ТЕМА ГОЛОВНА ТЕМА???</h2>
      <p className="text-base font-medium">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
        nihil obcaecati ratione tenetur sit atque cupiditate cumque nostrum,
        voluptate expedita non. Obcaecati odio corrupti error fugit.
        Exercitationem beatae non ex!
      </p>
      <img
        src={img}
        className="max-w-[340px] lg:max-w-[658px] max-h-[381px]"
        alt="Blog"
      />
      <p className="text-base font-medium">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo vel
        fugiat dolor pariatur iste, et illo expedita, quaerat ipsam ea voluptate
        obcaecati architecto mollitia recusandae perferendis tempora distinctio
        explicabo. Facilis!
      </p>
    </div>
  );
};

export default BlogContent;
