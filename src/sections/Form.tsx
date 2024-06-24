import { Container } from "@/components/Container";

export function Form() {
  return (
    <section className="w-full bg-secondary">
      <Container className="w-full  flex items-center justify-center gap-24 px-36 py-11 lg:flex-row">
        <div className="information__texts flex-1 flex flex-col gap-10">
          <h2 className="font-semibold text-[3.4rem] text-[#d9d9d9] -tracking-[2%]">
            Junte-se a nós e <span className="text-[#55d98d]">transforme a sua vida financeira</span>
          </h2>
          <p className="text-3xl text-[#d9d9d9] leading-7">
            Cadastre-se gratuitamente e junte-se a nossa comunidade de jogadores
            que já estão transformando suas vidas financeiras. Não perca mais
            tempo e comece sua jornada!
          </p>
        </div>

        <div className="registration__form flex-1 flex flex-col items-center justify-center gap-5 p-2 rounded-2xl">
          <img src={'./assets/logos/logo-coicraft.png'} alt="Imagem Coin Craft" className="mt-2" />

          <form className="w-full  flex flex-col px-4 gap-3">
            <input
              type="text"
              placeholder="NOME DO USUÁRIO"
              className="p-1 text-center rounded-xl font-thin outline-none"
            />
            <input
              type="text"
              placeholder="E-MAIL"
              className="p-1 text-center rounded-xl font-thin outline-none"
            />
            <input
              type="text"
              placeholder="CIDADE/ESTADO"
              className="p-1 text-center rounded-xl font-thin outline-none"
            />
            <input
              type="text"
              placeholder="DATA DE NASCIMENTO"
              className="p-1 text-center rounded-xl font-thin outline-none"
            />
            <input
              type="text"
              placeholder="GÊNERO"
              className="p-1 text-center rounded-xl font-thin outline-none"
            />
            <input
              type="text"
              placeholder="SENHA"
              className="p-1 text-center rounded-xl font-thin outline-none"
            />
            <input
              type="text"
              placeholder="CONFIRMAR SENHA"
              className="p-1 text-center rounded-xl font-thin outline-none"
            />
            <div className="flex justify-center items-center">
              <button
                className="btn_form p-2 rounded-3xl text-white font-semibold opacity-95"
                type="submit"
                style={{ minWidth: "100px" }}
              >
                COMECE A JOGAR
              </button>
            </div>
          </form>

          <p className="text-sm text-white ">
            Já tem uma conta?{" "}
            <strong>
              <u>
                Faça o <a href="#">LOGIN</a>{" "}
              </u>
            </strong>
          </p>
        </div>
      </Container>
    </section>

  );
}
