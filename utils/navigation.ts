import { useRouter } from 'expo-router';

/**
 * Hook customizado para navegação entre rotas
 * Facilita o acesso às rotas da aplicação
 */
export const useNavigation = () => {
  const router = useRouter();

  return {
    goToLogin: () => router.push('/'),
    goToOrdensDEServico: () => router.push('/ordens-de-servico'),
    goToCadastroTecnicos: () => router.push('/cadastro-tecnicos'),
    goBack: () => router.back(),
    canGoBack: () => router.canGoBack(),
  };
};

/**
 * Função para navegação programática
 * Uso: navigate(router, ROUTES.ORDENS_DE_SERVICO);
 */
export const navigate = (router: ReturnType<typeof useRouter>, route: Route) => {
  router.push(route as Parameters<ReturnType<typeof useRouter>['push']>[0]);
};

/**
 * Função para voltar à tela anterior
 */
export const goBack = (router: ReturnType<typeof useRouter>) => {
  if (router.canGoBack()) {
    router.back();
  }
};

/**
 * Constantes de rotas da aplicação
 */
export const ROUTES = {
  LOGIN: '/',
  ORDENS_DE_SERVICO: '/ordens-de-servico',
  CADASTRO_TECNICOS: '/cadastro-tecnicos',
} as const;

/**
 * Tipo para as rotas disponíveis
 */
export type Route = typeof ROUTES[keyof typeof ROUTES];

/**
 * Exemplos de uso:
 * 
 * // Usando o hook customizado
 * import { useNavigation } from '@/utils/navigation';
 * 
 * export default function MeuComponente() {
 *   const { goToOrdensDEServico } = useNavigation();
 *   
 *   return (
 *     <TouchableOpacity onPress={goToOrdensDEServico}>
 *       <Text>Ir para Ordens de Serviço</Text>
 *     </TouchableOpacity>
 *   );
 * }
 * 
 * // Usando as constantes de rotas
 * import { ROUTES } from '@/utils/navigation';
 * import { useRouter } from 'expo-router';
 * 
 * export default function OutroComponente() {
 *   const router = useRouter();
 *   
 *   const handleNavigate = () => {
 *     router.push(ROUTES.CADASTRO_TECNICOS);
 *   };
 * 
 *   return (
 *     <TouchableOpacity onPress={handleNavigate}>
 *       <Text>Cadastrar Técnico</Text>
 *     </TouchableOpacity>
 *   );
 * }
 */
