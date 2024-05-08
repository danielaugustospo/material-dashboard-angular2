import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../../url-service.service';
import { AuthService } from "../../../auth.service";

declare var $: any;
@Component({
  selector: 'app-cadastro-catalogo',
  templateUrl: './cadastro-catalogo.component.html',
  styleUrls: ['./cadastro-catalogo.component.css'],
})
export class CadastroCatalogoComponent implements OnInit {
  materiais: any[];
  unidades: any[];
  nomeBensPatrimoniais: string;
  qtdestoqueminimo: number;
  idTipoBensPatrimoniais: string;
  unidademedida: string;
  setor: string;
  prateleira: string;
  statusbenspatrimoniais: string;
  descricaoBensPatrimoniais: string;
  ativadoBensPatrimoniais: string;
  excluidoBensPatrimoniais: string;
  estante: string;
  nomeNovoTipoMaterial: string;

  constructor(public urlService: UrlService, private authService: AuthService) { }

  recarregaTipoMaterial() {
    this.getTipoMateriais();
  }

  salvar() {
    // Verifica se todos os campos obrigatórios foram preenchidos
    if (!this.nomeBensPatrimoniais ||
      !this.qtdestoqueminimo ||
      !this.idTipoBensPatrimoniais ||
      !this.unidademedida) {

      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Monta o objeto com os dados a serem enviados para o backend
    const dados = {
      nomeBensPatrimoniais:   this.nomeBensPatrimoniais,
      qtdestoqueminimo:       this.qtdestoqueminimo,
      idTipoBensPatrimoniais: this.idTipoBensPatrimoniais,
      unidademedida:          this.unidademedida,
      estante:                this.estante,
      prateleira:             this.prateleira,
      statusbenspatrimoniais:   '1',
      descricaoBensPatrimoniais:'0',
      ativadoBensPatrimoniais:  '1',
      excluidoBensPatrimoniais: '0'
    };

    // Chama o método do UrlService para cadastrar o material
    this.urlService.cadastrarMaterial(dados).subscribe(
      (response) => {
        console.log('Resposta do backend:', response);
        // Exibe um alerta de sucesso
        alert('Material cadastrado com sucesso!');
        // Limpa o formulário
        this.limparFormulario();
      },
      (error) => {
        console.error('Erro ao cadastrar material:', error);
        // Exibe um alerta de erro
        alert('Erro ao cadastrar material. Por favor, tente novamente mais tarde.');
      }
    );
  }


  showNotification(from, align) {
    const type = ['', 'info', 'success', 'warning', 'danger'];

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: "catalogo",
      message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."

    }, {
      type: type[color],
      timer: 4000,
      placement: {
        from: from,
        align: align
      },
      template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">catalogo</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
  }
  ngOnInit() {
    // Obtém o token de autenticação do AuthService
    const token = this.authService.getToken();
    if (!token) {
      localStorage.setItem('token', 'temporario');
    }
    this.getTipoMateriais();
    this.getUnidades();
  }

  limparFormulario() {
    // Limpa os campos do formulário
    this.nomeBensPatrimoniais = '';
    this.qtdestoqueminimo = null;
    this.idTipoBensPatrimoniais = null;
    this.unidademedida = '';
    this.estante = '';
    this.prateleira = '';

    this.getTipoMateriais();
    this.getUnidades();
  }

  openModal() {
    $('#tipoMaterialModal').modal('show'); // Abre a modal
  }

  salvarTipoMaterial() {
      if (!this.nomeNovoTipoMaterial) {
        alert('Por favor, preencha o nome do tipo de material.');
        return;
      }
  
      // Monta o objeto com os dados a serem enviados para o backend
      const dados = {
        name:   this.nomeNovoTipoMaterial,
        detail:'0',
        ativotipobenspatrimoniais:  '1',
        excluidotipobenspatrimoniais: '0'
      };
  
      this.urlService.cadastrarTipoMaterial(dados).subscribe(
        (response) => {
          console.log('Resposta do backend:', response);
          alert('Tipo de material cadastrado com sucesso!');
          this.nomeNovoTipoMaterial = '';
        },
        (error) => {
          console.error('Erro ao cadastrar tipo de material:', error);
          alert('Erro ao cadastrar tipo de material. Por favor, tente novamente mais tarde.');
        }
      );
    $('#tipoMaterialModal').modal('hide'); // Fecha a modal após o salvamento
  }

  getTipoMateriais() {
    this.urlService.getListaMateriais(this.authService.getToken()).subscribe(
      materiais => {
        this.materiais = materiais;
      },
      error => {
        console.error('Erro ao obter a lista de materiais:', error);
      }
    );
  }

  getUnidades() {
    this.urlService.getListaUnidades(this.authService.getToken()).subscribe(
      unidades => {
        this.unidades = unidades;
      },
      error => {
        console.error('Erro ao obter a lista de unidades:', error);
      }
    );
  }
}
