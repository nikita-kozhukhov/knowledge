'use client';

import { Github } from '@/assets/icons/Github';
import { Max } from '@/assets/icons/Max';
import { Telegram } from '@/assets/icons/Telegram';
import {
  AimOutlined,
  BulbOutlined,
  ExperimentOutlined,
  MailOutlined,
  ToolOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { Row, Col, Card, Avatar, Typography, Space, Divider } from 'antd';

const { Title, Text, Paragraph } = Typography;

export default function MainPage() {
  return (
    <Row gutter={24}>
      {/* Левая колонка — 1/4 */}
      <Col xs={24} md={6}>
        <Card style={{ height: '100%' }}>
          <Space
            orientation="vertical"
            size="large"
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Avatar
              style={{
                width: '100%',
                height: 'auto',
              }}
              src="/img/photo1.jpg"
            />

            <div>
              <Title level={3}>Никита Кожухов</Title>
              <Title level={5}>Frontend-Разработчик</Title>
              <Text type="secondary">React / TypeScript / Next</Text>
            </div>

            <Divider />

            <Space orientation="vertical" size="small">
              <Space size="small">
                <Telegram />
                <Text style={{ fontSize: 14 }}>@Kozhukhov_Nikita</Text>
              </Space>

              <Space size="small">
                <Max />
                <Text style={{ fontSize: 14 }}>+7 906 777-23-49</Text>
              </Space>

              <Space size="small">
                <MailOutlined style={{ fontSize: 28, fontWeight: 'bold' }} />
                <Text style={{ fontSize: 14 }}>knik0405@yandex.ru</Text>
              </Space>

              <Space size="small">
                <Github />
                <Text style={{ fontSize: 14 }}>
                  <a
                    style={{ color: 'inherit', textDecoration: 'none' }}
                    href="https://github.com/nikita-kozhukhov"
                    target="_blank"
                  >
                    github.com/nikita-kozhukhov
                  </a>
                </Text>
              </Space>
            </Space>
          </Space>
        </Card>
      </Col>

      {/* Правая колонка — 3/4 */}
      <Col xs={24} md={18}>
        <Card style={{ height: '100%', background: '#001529' }}>
          <Paragraph
            style={{
              color: '#efefef',
            }}
          >
            <Title
              level={5}
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#efefef',
              }}
            >
              <UserOutlined
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginRight: '15px',
                  color: '#FFE0B2',
                }}
              />
              Кто я
            </Title>
            Я Фронтенд-разработчик с ~6 годами коммерческого опыта. Работал с
            разными проектами — от лендингов и корпоративных сайтов до сложных
            веб-приложений с авторизацией, таблицами, графиками и динамическими
            данными.
          </Paragraph>

          <Paragraph
            style={{
              color: '#efefef',
            }}
          >
            <Title
              level={5}
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#efefef',
              }}
            >
              <AimOutlined
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginRight: '15px',
                  color: '#FFE0B2',
                }}
              />
              Подход к работе
            </Title>
            Смотрю на разработку в первую очередь с точки зрения бизнеса. Также
            большое внимание уделяю пользовательскому опыту и технической
            стороне. Мне важно, чтобы интерфейс был понятным, логичным и
            удобным, а функциональность — предсказуемой и стабильной.
          </Paragraph>

          <Paragraph
            style={{
              color: '#efefef',
            }}
          >
            <Title
              level={5}
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#efefef',
              }}
            >
              <ToolOutlined
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginRight: '15px',
                  color: '#FFE0B2',
                }}
              />
              Что я делаю на проектах
            </Title>
            Реализую адаптивные и кроссбраузерные интерфейсы, аккуратно переношу
            дизайн в код и работаю с разным клиентским функционалом: формы и
            авторизация, таблицы с фильтрацией, сортировкой и пагинацией, работа
            с изображениями, карусели, баннеры, графики и данные с сервера.
          </Paragraph>

          <Paragraph
            style={{
              color: '#efefef',
            }}
          >
            <Title
              level={5}
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#efefef',
              }}
            >
              <ExperimentOutlined
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginRight: '15px',
                  color: '#FFE0B2',
                }}
              />
              Этот сайт
            </Title>
            Этот сайт — не просто «портфолио», а набор отдельных страниц и
            сценариев, где я показываю реальные примеры того, как решаю задачи и
            строю интерфейсы — от идеи до готового результата.
          </Paragraph>

          <Paragraph
            style={{
              color: '#efefef',
            }}
          >
            <Title
              level={5}
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#efefef',
              }}
            >
              <BulbOutlined
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginRight: '15px',
                  color: '#FFE0B2',
                }}
              />
              Что для меня важно
            </Title>
            Ценю чистый и структурированный код, понятную архитектуру и проекты,
            которые легко поддерживать и развивать со временем. Мне важно, чтобы
            результат моей работы был удобен пользователям и понятен другим
            разработчикам.
          </Paragraph>

          <Paragraph
            style={{
              color: '#efefef',
            }}
          >
            <Title
              level={5}
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#efefef',
              }}
            >
              <MailOutlined
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginRight: '15px',
                  color: '#FFE0B2',
                }}
              />
              Открыт к диалогу
            </Title>
            Если вам нужен разработчик, который может взять на себя клиентскую
            часть продукта и довести её до стабильного результата — буду рад
            пообщаться.
          </Paragraph>
        </Card>
      </Col>
    </Row>
  );
}
